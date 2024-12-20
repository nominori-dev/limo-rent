package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehiclePriceRepository extends JpaRepository<VehiclePrice, Long> {
    List<VehiclePrice> findByVehicle(Vehicle vehicle);
    void deleteByVehicle(Vehicle vehicle);
}