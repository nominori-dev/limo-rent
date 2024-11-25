package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Vehicle}
 */
@Value
public class VehicleResponse implements Serializable {
    Long id;
    String vehicleName;
    VehicleClass vehicleClass;
    String vehicleDescription;
    Long vehicleLuggage;
    Long vehiclePassenger;
}