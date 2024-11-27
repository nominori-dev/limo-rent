package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import com.nominori.limorentbackend.service.VehicleImageService;
import com.nominori.limorentbackend.service.VehiclePriceService;
import com.nominori.limorentbackend.service.VehicleService;
import com.nominori.limorentbackend.web.dto.*;
import com.nominori.limorentbackend.web.mapper.VehicleImageMapper;
import com.nominori.limorentbackend.web.mapper.VehiclePriceMapper;
import com.nominori.limorentbackend.web.mapper.VehicleRequestMapper;
import com.nominori.limorentbackend.web.mapper.VehicleResponseMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/vehicle")
@RequiredArgsConstructor
@Tag(name = "Vehicle API", description = "API for managing vehicles and their pricing.")
public class VehicleController {

    private final VehicleService vehicleService;
    private final VehicleResponseMapper responseMapper;
    private final VehicleRequestMapper requestMapper;

    private final VehiclePriceService vehiclePriceService;
    private final VehiclePriceMapper priceMapper;

    private final VehicleImageService vehicleImageService;
    private final VehicleImageMapper imageMapper;

    // Vehicles
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleResponse> getAllVehicles() {
        return vehicleService.getAll().stream().map(responseMapper::toDto).toList();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleResponse getVehicleById(@PathVariable Long id) {
        return responseMapper.toDto(vehicleService.getById(id));
    }

    @GetMapping("/class/{className}")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleResponse> getVehiclesByClass(@PathVariable String className) {
        VehicleClass vehicleClass = VehicleClass.valueOf(className);
        return vehicleService.getByClass(vehicleClass).stream().map(responseMapper::toDto).toList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleResponse createVehicle(@RequestBody VehicleRequest vehicleRequest) {
        Vehicle vehicle = requestMapper.toEntity(vehicleRequest);
        return responseMapper.toDto(vehicleService.add(vehicle));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public VehicleResponse updateVehicle(@PathVariable Long id, @RequestBody VehicleRequest vehicleRequest) {
        Vehicle vehicle = requestMapper.toEntity(vehicleRequest);
        return responseMapper.toDto(vehicleService.update(id, vehicle));
    }

    // Prices
    @GetMapping("/price")
    @ResponseStatus(HttpStatus.OK)
    public List<VehiclePriceResponse> getAllVehiclePrices() {
        return vehiclePriceService.getAllVehiclePrices().stream().map(priceMapper::toDto).toList();
    }

    @GetMapping("/price/{priceId}")
    @ResponseStatus(HttpStatus.OK)
    public VehiclePriceResponse getVehiclePriceById(@PathVariable Long priceId) {
        return priceMapper.toDto(vehiclePriceService.getById(priceId));
    }

    @GetMapping("/{id}/price")
    @ResponseStatus(HttpStatus.OK)
    public List<VehiclePriceResponse> getVehiclePriceByVehicleId(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getById(id);
        return vehiclePriceService.getByVehicle(vehicle).stream().map(priceMapper::toDto).toList();
    }

    @PostMapping("/price")
    @ResponseStatus(HttpStatus.CREATED)
    public VehiclePriceResponse createVehiclePrice(@RequestBody VehiclePriceRequest vehiclePriceRequest) {
        Vehicle vehicle = vehicleService.getById(vehiclePriceRequest.getVehicleId());
        return priceMapper.toDto(
                vehiclePriceService.addVehiclePrice(vehiclePriceRequest.toVehiclePrice(vehicle))
        );
    }

    @PutMapping("/price/{priceId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public VehiclePriceResponse updateVehiclePrice(@PathVariable Long priceId, @RequestBody VehiclePriceRequest vehiclePriceRequest) {
        Vehicle vehicle = vehicleService.getById(vehiclePriceRequest.getVehicleId());
        return priceMapper.toDto(
                vehiclePriceService.updateVehiclePriceById(priceId, vehiclePriceRequest.toVehiclePrice(vehicle))
        );
    }

    // Images
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

    @DeleteMapping("/image/{imageId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteVehicleImage(@PathVariable Long imageId) {
        vehicleImageService.deleteById(imageId);
    }
}
