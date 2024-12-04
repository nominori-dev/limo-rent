package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.exception.ResourceNotFoundException;
import com.nominori.limorentbackend.model.dao.VehicleImageRepository;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import com.nominori.limorentbackend.service.VehicleImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleImageServiceImpl implements VehicleImageService {

    private final VehicleImageRepository vehicleImageRepository;


    @Override
    public VehicleImage addVehicleImage(VehicleImage VehicleImage) {
        return vehicleImageRepository.save(VehicleImage);
    }


    @Override
    public VehicleImage getById(Long id) {
        return vehicleImageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle Image not found"));
    }

    @Override
    public List<VehicleImage> getAllVehicleImages() {
        return vehicleImageRepository.findAll();
    }

    @Override
    public List<VehicleImage> getByVehicle(Vehicle vehicle) {
        return vehicleImageRepository.findByVehicle(vehicle);
    }

    @Override
    public VehicleImage updateVehicleImage(Long id, VehicleImage VehicleImage) {
        VehicleImage image = getById(id);
        image.setVehicle(VehicleImage.getVehicle());
        image.setImageAlt(VehicleImage.getImageAlt());
        image.setImageType(VehicleImage.getImageType());
        image.setImageUrl(VehicleImage.getImageUrl());
        return vehicleImageRepository.save(image);
    }

    @Override
    public void deleteById(Long id) {
        vehicleImageRepository.deleteById(id);
    }

    @Override
    public void deleteByVehicle(Vehicle vehicle) {
        vehicleImageRepository.deleteByVehicle(vehicle);
    }

}
