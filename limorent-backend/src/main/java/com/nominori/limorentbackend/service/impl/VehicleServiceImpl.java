package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.dao.VehicleRepository;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;

    @Override
    public Vehicle getById(Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
    }

    @Override
    public List<Vehicle> getAll() {
        return vehicleRepository.findAll();
    }


    @Override
    public List<Vehicle> getByClass(VehicleClass vehicleClass) {
        return vehicleRepository.findAllByVehicleClass(vehicleClass);
    }

    @Override
    public void deleteById(Long id) {
        vehicleRepository.deleteById(id);
    }

    @Override
    public Vehicle add(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle update(Long id, Vehicle updatedVehicle) {

        Vehicle vehicle = getById(id);
        vehicle.setVehicleClass(updatedVehicle.getVehicleClass());
        vehicle.setVehicleName(updatedVehicle.getVehicleName());
        vehicle.setVehicleDescription(updatedVehicle.getVehicleDescription());
        vehicle.setVehicleLuggage(updatedVehicle.getVehicleLuggage());
        vehicle.setVehiclePassenger(updatedVehicle.getVehiclePassenger());

        return vehicleRepository.save(vehicle);
    }
}
