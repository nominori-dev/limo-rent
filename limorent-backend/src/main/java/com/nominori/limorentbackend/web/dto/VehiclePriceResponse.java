package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.entity.VehiclePrice;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link VehiclePrice}
 */
@Value
public class VehiclePriceResponse implements Serializable {
    Long id;
    VehicleResponse vehicle;
    String priceTitle;
    Long price;
}