package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findAllByVehicleClass(VehicleClass vehicleClass);
}