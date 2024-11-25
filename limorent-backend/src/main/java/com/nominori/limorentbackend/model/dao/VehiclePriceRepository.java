package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.entity.VehiclePrice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiclePriceRepository extends JpaRepository<VehiclePrice, Long> {
}