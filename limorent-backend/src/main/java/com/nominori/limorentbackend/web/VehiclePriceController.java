package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.service.VehiclePriceService;
import com.nominori.limorentbackend.service.VehicleService;
import com.nominori.limorentbackend.web.dto.VehiclePriceRequest;
import com.nominori.limorentbackend.web.dto.VehiclePriceResponse;
import com.nominori.limorentbackend.web.dto.VehicleRequest;
import com.nominori.limorentbackend.web.dto.VehicleResponse;
import com.nominori.limorentbackend.web.mapper.VehiclePriceMapper;
import com.nominori.limorentbackend.web.mapper.VehicleRequestMapper;
import com.nominori.limorentbackend.web.mapper.VehicleResponseMapper;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicle")
@RequiredArgsConstructor
@Tag(name = "Vehicle Price API", description = "API for managing vehicle pricing.")
public class VehiclePriceController {

    private final VehiclePriceService vehiclePriceService;
    private final VehiclePriceMapper priceMapper;
    private final VehicleService vehicleService;

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

    @DeleteMapping("/price/{priceId}")
    @ResponseStatus(HttpStatus.OK)
    public void removeVehiclePrice(@PathVariable Long priceId) {
        vehiclePriceService.deleteById(priceId);
    }
}
