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
@Tag(name = "Vehicle API", description = "API for managing vehicles.")
public class VehicleController {

    private final VehicleService vehicleService;
    private final VehicleResponseMapper responseMapper;
    private final VehicleRequestMapper requestMapper;

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

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void removeVehicle(@PathVariable Long id) {
        vehicleService.deleteById(id);
    }
}
