package com.example.chabak.controller;

import com.example.chabak.model.PointEntry;
import com.example.chabak.repository.PointEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class AddressController {

    @Autowired
    PointEntryRepository pointEntryRepository;

    @GetMapping("/map")
    public String insertPage(){
        return "map";
    }

    @GetMapping("/marker")
    public String marker(Model model) {
       return "marker";
    }



}
