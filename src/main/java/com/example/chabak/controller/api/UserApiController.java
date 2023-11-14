package com.example.chabak.controller.api;

import com.example.chabak.repository.UserRepository;
import com.example.chabak.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserApiController {

    @Autowired
    UserService userService;

    @PostMapping("/api/user/usernameRegister")
    public String check(@RequestBody Map<String, String> requestData){
        String username = requestData.get("username");
        if(userService.usernameOverlap(username).get("result")){
            return "1";
        }else{
            return "0";
        }

    }

}
