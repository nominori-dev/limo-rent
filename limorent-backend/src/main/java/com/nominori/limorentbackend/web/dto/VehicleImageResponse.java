package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.ImageType;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.nominori.limorentbackend.model.entity.VehicleImage}
 */
@Value
public class VehicleImageResponse implements Serializable {
    Long id;
    VehicleResponse vehicle;
    ImageType imageType;
    String imageUrl;
    String imageAlt;
}