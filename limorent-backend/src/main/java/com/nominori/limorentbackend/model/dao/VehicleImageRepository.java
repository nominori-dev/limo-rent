package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleImageRepository extends JpaRepository<VehicleImage, Long> {
    List<VehicleImage> findByVehicle(Vehicle vehicle);
    void deleteByVehicle(Vehicle vehicle);
}