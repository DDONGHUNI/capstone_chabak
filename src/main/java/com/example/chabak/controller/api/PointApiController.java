package com.example.chabak.controller.api;

import com.example.chabak.dto.PointDto;
import com.example.chabak.dto.ResponseDto;
import com.example.chabak.model.GeomUtil;
import com.example.chabak.model.PointEntry;
import com.example.chabak.repository.PointEntryRepository;
import com.example.chabak.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.locationtech.jts.geom.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
        pointService.write(pointEntry);
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }

//    @GetMapping("/api/data")
//    public List<PointEntry> getData() {
//        List<PointEntry> pointEntries = pointEntryRepository.findAll();
//
//    }

}
