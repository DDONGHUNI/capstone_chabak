package com.example.chabak.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.locationtech.jts.geom.*;

import javax.persistence.*;
import java.io.Serializable;


@Data
@AllArgsConstructor
@Builder
@Entity
public class PointEntry implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, columnDefinition = "GEOMETRY")
    private Point point;



    private String sido;

    private String address;

    public PointEntry() {
    }

    public PointEntry(Point point) {
        this.point = point;
    }


}