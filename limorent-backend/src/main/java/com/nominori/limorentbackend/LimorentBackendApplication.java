package com.nominori.limorentbackend;

import com.nominori.limorentbackend.model.ImageType;
import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.service.CustomerService;
import com.nominori.limorentbackend.service.VehicleImageService;
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
    private final VehicleImageService vehicleImageService;
    private final CustomerService customerService;

    public static void main(String[] args) {
        SpringApplication.run(LimorentBackendApplication.class, args);
    }


    @EventListener(ApplicationReadyEvent.class)
    public void initializeDemoData() {
        for (int i = 1; i <= 4; i++) {
            // Create Vehicle instance using the new constructor
            Vehicle vehicle = new Vehicle(
                    "Bentley Bentayga 2024",
                    VehicleClass.LUXURY,
                    "<h1>Standardowe wyposażenie pojazdu obejmuje m.in. system ABS i ESP, elektryczne sterowanie szyb, elektryczne sterowanie lusterek, 8-calowy ekran dotykowy systemu multimedialnego, połączenie z internetem, pokładowy dysk twardy o pojemności 60 GB, wielofunkcyjną kierownicę, klimatyzację automatyczną, wyświetlacz HUD, pokrętło do wybrania trybu jazdy, regulację prześwitu pneumatycznego zawieszenia, skórzaną tapicerkę, przednie fotele z funkcją masażu, podgrzewania, wentylacji, a także 22-stopniowej regulacji oraz dwa 10-calowe tablety dla pasażerów z systemem Android[4], asystenta utrzymywania pasa ruchu i aktywny tempomat, a także 20-calowe alufelgi i 18-głośnikowy system audio Naim o łącznej mocy 1950 watów</h1>",
                    4L,
                    2L
            );
            vehicle = vehicleService.add(vehicle);

            // Create VehiclePrice instances using the new constructor
            VehiclePrice price1 = new VehiclePrice(vehicle, "Godzina (hour)", 30000L);
            VehiclePrice price2 = new VehiclePrice(vehicle, "Kilometry", 7500L);

            vehiclePriceService.addVehiclePrice(price1);
            vehiclePriceService.addVehiclePrice(price2);

            // Create VehicleImage instances using the new constructor
            VehicleImage mainImage = new VehicleImage(
                    vehicle,
                    ImageType.MAIN,
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bentley_Bentayga_V8_%28FL%29_IMG_4122.jpg/1920px-Bentley_Bentayga_V8_%28FL%29_IMG_4122.jpg",
                    "Bentayga Przód"
            );

            VehicleImage secondaryImage1 = new VehicleImage(
                    vehicle,
                    ImageType.GALLERY,
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bentley_Bentayga_Diesel_%E2%80%93_Heckansicht%2C_24._Juni_2017%2C_D%C3%BCsseldorf.jpg/1920px-Bentley_Bentayga_Diesel_%E2%80%93_Heckansicht%2C_24._Juni_2017%2C_D%C3%BCsseldorf.jpg",
                    "Bentayga Tył"
            );

            VehicleImage secondaryImage2 = new VehicleImage(
                    vehicle,
                    ImageType.GALLERY,
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bentley_Bentayga_V8_%28FL%29_IMG_4117.jpg/1920px-Bentley_Bentayga_V8_%28FL%29_IMG_4117.jpg",
                    "Bentayga Tył 2"
            );

            vehicleImageService.addVehicleImage(mainImage);
            vehicleImageService.addVehicleImage(secondaryImage1);
            vehicleImageService.addVehicleImage(secondaryImage2);
        }
    }

}
