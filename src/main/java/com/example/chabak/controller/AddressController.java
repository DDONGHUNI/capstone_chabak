package com.example.chabak.controller;

import com.example.chabak.repository.PointEntryRepository;
import com.example.chabak.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;





@Controller
public class AddressController {


    @Secured("ROLE_MANAGER")
    @GetMapping("/map")
    public String insertPage(){
        return "map";
    }



    @GetMapping("/marker")
    public String marker(){
        return "marker";
    }


}
