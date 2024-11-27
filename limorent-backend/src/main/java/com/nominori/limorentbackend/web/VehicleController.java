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

@CrossOrigin(origins = "*")
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

    @Operation(summary = "Get all vehicles", description = "Retrieve a list of all available vehicles.")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleResponse> getAllVehicles() {
        return vehicleService.getAll().stream().map(responseMapper::toDto).toList();
    }

    @Operation(summary = "Get vehicle by ID", description = "Retrieve details of a specific vehicle by its ID.")
    @Parameter(name = "id", description = "The ID of the vehicle to retrieve.", required = true)
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleResponse getVehicleById(@PathVariable Long id) {
        return responseMapper.toDto(vehicleService.getById(id));
    }

    @Operation(summary = "Get vehicles by class", description = "Retrieve vehicles belonging to a specific class.")
    @Parameter(name = "class", description = "The class of vehicles to retrieve.", required = true)
    @GetMapping("/class/{class}")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleResponse> getVehiclesByClass(@PathVariable(name = "class") String className) {
        VehicleClass vehicleClass = VehicleClass.valueOf(className);
        return vehicleService.getByClass(vehicleClass).stream().map(responseMapper::toDto).toList();
    }

    @Operation(summary = "Create a new vehicle", description = "Add a new vehicle to the system.")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleResponse createVehicle(@RequestBody VehicleRequest vehicleRequest) {
        Vehicle vehicle = requestMapper.toEntity(vehicleRequest);
        return responseMapper.toDto(vehicleService.add(vehicle));
    }

    @Operation(summary = "Update vehicle details", description = "Update the details of an existing vehicle by its ID.")
    @Parameter(name = "id", description = "The ID of the vehicle to update.", required = true)
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public VehicleResponse updateVehicle(@PathVariable Long id, @RequestBody VehicleRequest vehicleRequest) {
        Vehicle vehicle = requestMapper.toEntity(vehicleRequest);
        return responseMapper.toDto(vehicleService.update(id, vehicle));
    }

    @Operation(summary = "Get all vehicle prices", description = "Retrieve a list of all vehicle prices.")
    @GetMapping("/price")
    @ResponseStatus(HttpStatus.OK)
    public List<VehiclePriceResponse> getAllVehiclePrices() {
        return vehiclePriceService.getAllVehiclePrices().stream().map(priceMapper::toDto).toList();
    }

    @Operation(summary = "Get vehicle price by ID", description = "Retrieve a specific vehicle price by its ID.")
    @Parameter(name = "id", description = "The ID of the vehicle price to retrieve.", required = true)
    @GetMapping("/price/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehiclePriceResponse getVehiclePriceById(@PathVariable Long id) {
        return priceMapper.toDto(vehiclePriceService.getById(id));
    }

    @Operation(summary = "Get prices for a specific vehicle", description = "Retrieve all pricing details for a given vehicle by its ID.")
    @Parameter(name = "id", description = "The ID of the vehicle whose prices to retrieve.", required = true)
    @GetMapping("/{id}/price")
    @ResponseStatus(HttpStatus.OK)
    public List<VehiclePriceResponse> getVehiclePriceByVehicleId(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getById(id);
        return vehiclePriceService.getByVehicle(vehicle).stream().map(priceMapper::toDto).toList();
    }

    @Operation(summary = "Create a new vehicle price", description = "Add a new price for a specific vehicle.")
    @PostMapping("/price")
    @ResponseStatus(HttpStatus.CREATED)
    public VehiclePriceResponse createVehiclePrice(@RequestBody VehiclePriceRequest vehiclePriceRequest) {
        Vehicle vehicle = vehicleService.getById(vehiclePriceRequest.getVehicleId());
        return priceMapper.toDto(
                vehiclePriceService.addVehiclePrice(vehiclePriceRequest.toVehiclePrice(vehicle))
        );
    }

    @Operation(summary = "Update a vehicle price", description = "Update an existing price for a specific vehicle by price ID.")
    @Parameter(name = "id", description = "The ID of the vehicle price to update.", required = true)
    @PutMapping("/price/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public VehiclePriceResponse updateVehiclePrice(@PathVariable Long id, @RequestBody VehiclePriceRequest vehiclePriceRequest) {
        Vehicle vehicle = vehicleService.getById(vehiclePriceRequest.getVehicleId());
        return priceMapper.toDto(
                vehiclePriceService.updateVehiclePriceById(id, vehiclePriceRequest.toVehiclePrice(vehicle))
        );
    }

    @GetMapping("/image")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleImageResponse> getVehicleImages() {
        return vehicleImageService.getAllVehicleImages()
                .stream()
                .map(imageMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}/image")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleImageResponse> getVehicleImagesByVehicleId(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getById(id);
        return vehicleImageService.getByVehicle(vehicle)
                .stream()
                .map(imageMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/image/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleImageResponse getVehicleImageById(@PathVariable Long id) {
        return imageMapper.toDto(vehicleImageService.getById(id));
    }

    @PostMapping("/image")
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleImageResponse createVehicleImage(@RequestBody VehicleImageRequest vehicleImageRequest) {
        Vehicle vehicle = vehicleService.getById(vehicleImageRequest.getVehicleId());
        VehicleImage vehicleImage = vehicleImageRequest.toVehicleImage(vehicle);

        return imageMapper.toDto(vehicleImageService.addVehicleImage(vehicleImage));
    }

    @DeleteMapping("/image/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteVehicleImage(@PathVariable Long id) {
        vehicleImageService.deleteById(id);
    }

}
