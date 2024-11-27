package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.exception.ResourceNotFoundException;
import com.nominori.limorentbackend.model.dao.VehiclePriceRepository;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.service.VehiclePriceService;
import com.nominori.limorentbackend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehiclePriceServiceImpl implements VehiclePriceService {

    private final VehiclePriceRepository vehiclePriceRepository;
    private final VehicleService vehicleService;

    @Override
    public VehiclePrice addVehiclePrice(VehiclePrice vehiclePrice) {
        return vehiclePriceRepository.save(vehiclePrice);
    }

    @Override
    public VehiclePrice updateVehiclePriceById(Long id, VehiclePrice vehiclePrice) {
        VehiclePrice price = getById(id);

        price.setPrice(vehiclePrice.getPrice());
        price.setPriceTitle(vehiclePrice.getPriceTitle());
        price.setVehicle(vehiclePrice.getVehicle());

        return vehiclePriceRepository.save(price);
    }

    @Override
    public VehiclePrice getById(Long id) {
        return vehiclePriceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("VehiclePrice not found"));
    }

    @Override
    public List<VehiclePrice> getAllVehiclePrices() {
        return vehiclePriceRepository.findAll();
    }

    @Override
    public List<VehiclePrice> getByVehicle(Vehicle vehicle) {
        return vehiclePriceRepository.findByVehicle(vehicle);
    }

    @Override
    public void deleteById(Long id) {
        vehiclePriceRepository.deleteById(id);
    }

    @Override
    public void deleteByVehicle(Vehicle vehicle) {
        vehiclePriceRepository.deleteByVehicle(vehicle);
    }
}
