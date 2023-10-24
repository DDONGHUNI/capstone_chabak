package com.example.chabak.model;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;

public class GeomUtil {
    public static GeomUtil geomUtil = new GeomUtil();

    public static Point createPoint(double lat, double lng) {
        GeometryFactory gf = new GeometryFactory();
        return gf.createPoint(new Coordinate(lat, lng));
    }


}