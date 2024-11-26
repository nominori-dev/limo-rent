package com.nominori.limorentbackend;

import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.service.CustomerService;
import com.nominori.limorentbackend.service.VehiclePriceService;
import com.nominori.limorentbackend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
@RequiredArgsConstructor
public class LimorentBackendApplication {

    private final VehicleService vehicleService;
    private final VehiclePriceService vehiclePriceService;
    private final CustomerService customerService;

    public static void main(String[] args) {
        SpringApplication.run(LimorentBackendApplication.class, args);
    }


    @EventListener(ApplicationReadyEvent.class)
    public void doSomethingAfterStartup() {
        Vehicle vehicle = new Vehicle();
        vehicle.setVehiclePassenger(2L);
        vehicle.setVehicleLuggage(4L);
        vehicle.setVehicleName("Bentley");
        vehicle.setVehicleClass(VehicleClass.LUXURY);
        vehicle.setVehicleDescription("Very cool Bentley");

        vehicle = vehicleService.add(vehicle);
        VehiclePrice price = new VehiclePrice();
        price.setVehicle(vehicle);
        price.setPriceTitle("Per hour");
        price.setPrice(30000L);

        vehiclePriceService.addVehiclePrice(price);
    }

}
