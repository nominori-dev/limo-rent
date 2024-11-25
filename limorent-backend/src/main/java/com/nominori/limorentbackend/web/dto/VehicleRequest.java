package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Vehicle}
 */
@Value
public class VehicleRequest implements Serializable {
    String vehicleName;
    VehicleClass vehicleClass;
    String vehicleDescription;
    Long vehicleLuggage;
    Long vehiclePassenger;
}