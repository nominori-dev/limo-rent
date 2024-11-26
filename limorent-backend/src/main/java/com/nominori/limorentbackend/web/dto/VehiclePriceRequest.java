package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link VehiclePrice}
 */
@Value
public class VehiclePriceRequest implements Serializable {
    Long vehicleId;
    String priceTitle;
    Long price;

    public VehiclePrice toVehiclePrice(Vehicle vehicle) {
        VehiclePrice vehiclePrice = new VehiclePrice();
        vehiclePrice.setVehicle(vehicle);
        vehiclePrice.setPrice(this.price);
        vehiclePrice.setPriceTitle(this.priceTitle);

        return vehiclePrice;
    }

}