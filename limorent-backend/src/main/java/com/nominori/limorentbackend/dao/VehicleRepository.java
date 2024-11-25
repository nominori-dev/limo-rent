package com.nominori.limorentbackend.dao;

import com.nominori.limorentbackend.model.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}