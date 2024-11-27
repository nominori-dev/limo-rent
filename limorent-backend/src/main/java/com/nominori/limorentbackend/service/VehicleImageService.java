package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;

import java.util.List;

public interface VehicleImageService {
    VehicleImage addVehicleImage(VehicleImage VehicleImage);
    VehicleImage getById(Long id);
    List<VehicleImage> getAllVehicleImages();
    List<VehicleImage> getByVehicle(Vehicle vehicle);
    void deleteById(Long id);
    void deleteByVehicle(Vehicle vehicle);
}
