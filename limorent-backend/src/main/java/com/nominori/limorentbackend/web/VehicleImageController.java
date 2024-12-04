package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import com.nominori.limorentbackend.service.VehicleImageService;
import com.nominori.limorentbackend.service.VehiclePriceService;
import com.nominori.limorentbackend.service.VehicleService;
import com.nominori.limorentbackend.web.dto.VehicleImageRequest;
import com.nominori.limorentbackend.web.dto.VehicleImageResponse;
import com.nominori.limorentbackend.web.dto.VehiclePriceRequest;
import com.nominori.limorentbackend.web.dto.VehiclePriceResponse;
import com.nominori.limorentbackend.web.mapper.VehicleImageMapper;
import com.nominori.limorentbackend.web.mapper.VehiclePriceMapper;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicle")
@RequiredArgsConstructor
@Tag(name = "Vehicle Image API", description = "API for managing vehicle images.")
public class VehicleImageController {

    private final VehicleImageService vehicleImageService;
    private final VehicleImageMapper imageMapper;
    private final VehicleService vehicleService;

    @GetMapping("/{id}/images")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleImageResponse> getVehicleImagesByVehicleId(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getById(id);
        return vehicleImageService.getByVehicle(vehicle)
                .stream()
                .map(imageMapper::toDto)
                .toList();
    }

    @GetMapping("/image")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleImageResponse> getAllVehicleImages() {
        return vehicleImageService.getAllVehicleImages()
                .stream()
                .map(imageMapper::toDto)
                .toList();
    }

    @GetMapping("/image/{imageId}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleImageResponse getVehicleImageById(@PathVariable Long imageId) {
        return imageMapper.toDto(vehicleImageService.getById(imageId));
    }

    @PostMapping("/image")
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleImageResponse createVehicleImage(@RequestBody VehicleImageRequest vehicleImageRequest) {
        Vehicle vehicle = vehicleService.getById(vehicleImageRequest.getVehicleId());
        VehicleImage vehicleImage = vehicleImageRequest.toVehicleImage(vehicle);

        return imageMapper.toDto(vehicleImageService.addVehicleImage(vehicleImage));
    }

    @PutMapping("/image/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleImageResponse updateVehicleImage(@PathVariable Long id, @RequestBody VehicleImageRequest vehicleImageRequest) {
        Vehicle vehicle = vehicleService.getById(vehicleImageRequest.getVehicleId());
        VehicleImage vehicleImage = vehicleImageRequest.toVehicleImage(vehicle);

        return imageMapper.toDto(vehicleImageService.updateVehicleImage(id, vehicleImage));
    }

    @DeleteMapping("/image/{imageId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteVehicleImage(@PathVariable Long imageId) {
        vehicleImageService.deleteById(imageId);
    }
}

