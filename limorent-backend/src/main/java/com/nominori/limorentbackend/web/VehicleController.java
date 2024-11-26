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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/vehicle")
@RequiredArgsConstructor
@Tag(name = "Vehicle API")
public class VehicleController {

    private final VehicleService vehicleService;
    private final VehicleResponseMapper responseMapper;
    private final VehicleRequestMapper requestMapper;

    private final VehiclePriceService vehiclePriceService;
    private final VehiclePriceMapper priceMapper;



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

    @GetMapping("/class/{class}")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleResponse> getVehiclesByClass(@PathVariable(name = "class") String className) {
        VehicleClass vehicleClass = VehicleClass.valueOf(className);
        return vehicleService.getByClass(vehicleClass).stream().map(responseMapper::toDto).toList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleResponse createVehicle(@RequestBody VehicleRequest vehicleRequest) {
        Vehicle vehicle = requestMapper.toEntity(vehicleRequest);
        return responseMapper.toDto(vehicleService.add(vehicle));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public VehicleResponse updateVehicle(@PathVariable Long id, @RequestBody VehicleRequest vehicleRequest) {
        Vehicle vehicle = requestMapper.toEntity(vehicleRequest);
        return responseMapper.toDto(vehicleService.update(id, vehicle));
    }

    @GetMapping("/price")
    @ResponseStatus(HttpStatus.OK)
    public List<VehiclePriceResponse> getAllVehiclePrices() {
        return vehiclePriceService.getAllVehiclePrices().stream().map(priceMapper::toDto).toList();
    }

    @GetMapping("/price/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehiclePriceResponse getVehiclePriceById(@PathVariable Long id) {
        return priceMapper.toDto(vehiclePriceService.getById(id));
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

    @PutMapping("/price/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public VehiclePriceResponse updateVehiclePrice(@PathVariable Long id, @RequestBody VehiclePriceRequest vehiclePriceRequest) {
        Vehicle vehicle = vehicleService.getById(vehiclePriceRequest.getVehicleId());
        return priceMapper.toDto(
                vehiclePriceService.updateVehiclePriceById(id, vehiclePriceRequest.toVehiclePrice(vehicle))
        );
    }
}
