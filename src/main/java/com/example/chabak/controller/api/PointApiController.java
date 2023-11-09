package com.example.chabak.controller.api;

import com.example.chabak.dto.PointDto;
import com.example.chabak.dto.PointResponse;
import com.example.chabak.dto.ResponseDto;
import com.example.chabak.model.GeomUtil;
import com.example.chabak.model.PointEntry;
import com.example.chabak.repository.PointEntryRepository;
import com.example.chabak.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.locationtech.jts.geom.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PointApiController {

    @Autowired
    private PointService pointService;

    @Autowired
    private PointEntryRepository pointEntryRepository;

    @PostMapping("/api/map")
    public ResponseDto<Integer> save(@RequestBody PointDto pointdto) {
        Point pt = GeomUtil.createPoint(pointdto.getLat(),pointdto.getLng());
        PointEntry pointEntry = new PointEntry(pt);
        pointEntry.setAddress(pointdto.getAddress());
        pointEntry.setSido(pointdto.getSido());
        pointService.write(pointEntry);
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }

    @GetMapping("/api/marker")
    @ResponseBody
    public List<PointResponse> marker() {
        int i=0;
        List<PointEntry> points = pointService.pointEntryList();
        List<PointResponse> pr = new ArrayList<>();
        for(PointEntry point : points){
            pr.add(new PointResponse(point));
        }
        return pr;
    }

}
