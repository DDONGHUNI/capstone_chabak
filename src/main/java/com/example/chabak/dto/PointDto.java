package com.example.chabak.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PointDto {
    private double lat;
    private double lng;
    private String address;
    private String sido;
}
