package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;

import java.util.List;

public interface VehicleService {

    Vehicle getById(Long id);
    List<Vehicle> getAll();
    List<Vehicle> getByClass(VehicleClass vehicleClass);
    void deleteById(Long id);
    Vehicle add(Vehicle vehicle);
    Vehicle update(Long id, Vehicle updatedVehicle);

}
