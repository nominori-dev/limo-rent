package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.ImageType;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import lombok.Value;

@Value
public class VehicleImageRequest {
    Long vehicleId;
    ImageType imageType;
    String imageUrl;
    String imageAlt;

    public VehicleImage toVehicleImage(Vehicle vehicle){
        VehicleImage vehicleImage = new VehicleImage();
        vehicleImage.setVehicle(vehicle);
        vehicleImage.setImageType(this.imageType);
        vehicleImage.setImageUrl(this.imageUrl);
        vehicleImage.setImageAlt(this.imageAlt);

        return vehicleImage;
    }

}
