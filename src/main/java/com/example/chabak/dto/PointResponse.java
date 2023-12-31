package com.example.chabak.dto;

import com.example.chabak.model.PointEntry;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.*;

@Data
@NoArgsConstructor
public class PointResponse {

    private int id;
    private double lat;
    private double lng;
    private String sido;
    private String address;
    private String category;
    private String name;
    private String img;
    private int boardId;

    public PointResponse(PointEntry pointEntry){
        this.id = pointEntry.getId();
        this.sido = pointEntry.getSido();
        this.address = pointEntry.getAddress();
        this.category = pointEntry.getCategory();
        this.name = pointEntry.getName();
        this.img = pointEntry.getImg();
        this.boardId = pointEntry.getBoard().getId();
        PointUtil point = new PointUtil(pointEntry.getPoint());
        this.lat = point.getLatitude();
        this.lng = point.getLongitude();
    }

    @Getter
    @NoArgsConstructor
    private static class PointUtil {
        private Double longitude;	// 경도
        private Double latitude;	// 위도

        public PointUtil(Point entity) {
            this.longitude = entity.getX();
            this.latitude = entity.getY();
        }
    }
}


