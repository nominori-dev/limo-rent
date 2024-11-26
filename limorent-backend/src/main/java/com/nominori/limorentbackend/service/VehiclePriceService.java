package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehiclePrice;

import java.util.List;

public interface VehiclePriceService {
    VehiclePrice addVehiclePrice(VehiclePrice vehiclePrice);
    VehiclePrice updateVehiclePriceById(Long id, VehiclePrice vehiclePrice);

    VehiclePrice getById(Long id);

    List<VehiclePrice> getAllVehiclePrices();
    List<VehiclePrice> getByVehicle(Vehicle vehicle);
    void deleteById(Long id);
    void deleteByVehicle(Vehicle vehicle);
}
