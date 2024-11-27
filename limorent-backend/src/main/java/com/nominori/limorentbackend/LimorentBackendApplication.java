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
    public void doSomethingAfterStartup() {
        Vehicle vehicle = new Vehicle();
        vehicle.setVehiclePassenger(2L);
        vehicle.setVehicleLuggage(4L);
        vehicle.setVehicleName("Bentley Bentayga 2024");
        vehicle.setVehicleClass(VehicleClass.LUXURY);
        vehicle.setVehicleDescription("<h1> Standardowe wyposażenie pojazdu obejmuje m.in. system ABS i ESP, elektryczne sterowanie szyb, elektryczne sterowanie lusterek, 8-calowy ekran dotykowy systemu multimedialnego, połączenie z internetem, pokładowy dysk twardy o pojemności 60 GB, wielofunkcyjną kierownicę, klimatyzację automatyczną, wyświetlacz HUD, pokrętło do wybrania trybu jazdy, regulację prześwitu pneumatycznego zawieszenia, skórzaną tapicerkę, przednie fotele z funkcją masażu, podgrzewania, wentylacji, a także 22-stopniowej regulacji oraz dwa 10-calowe tablety dla pasażerów z systemem Android[4], asystenta utrzymywania pasa ruchu i aktywny tempomat, a także 20-calowe alufelgi i 18-głośnikowy system audio Naim o łącznej mocy 1950 watów </h1>");

        vehicle = vehicleService.add(vehicle);
        VehiclePrice price = new VehiclePrice();
        price.setVehicle(vehicle);
        price.setPriceTitle("Godzina (hour)");
        price.setPrice(30000L);

        VehiclePrice price2 = new VehiclePrice();
        price2.setVehicle(vehicle);
        price2.setPriceTitle("Kilometry");
        price2.setPrice(7500L);

        vehiclePriceService.addVehiclePrice(price);
        vehiclePriceService.addVehiclePrice(price2);

        VehicleImage mainImage = new VehicleImage();
        mainImage.setVehicle(vehicle);
        mainImage.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bentley_Bentayga_V8_%28FL%29_IMG_4122.jpg/1920px-Bentley_Bentayga_V8_%28FL%29_IMG_4122.jpg");
        mainImage.setImageAlt("Bentayga Przód");
        mainImage.setImageType(ImageType.MAIN);

        VehicleImage secondaryImage = new VehicleImage();
        secondaryImage.setVehicle(vehicle);
        secondaryImage.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bentley_Bentayga_Diesel_%E2%80%93_Heckansicht%2C_24._Juni_2017%2C_D%C3%BCsseldorf.jpg/1920px-Bentley_Bentayga_Diesel_%E2%80%93_Heckansicht%2C_24._Juni_2017%2C_D%C3%BCsseldorf.jpg");
        secondaryImage.setImageAlt("Bentayga Tył");
        secondaryImage.setImageType(ImageType.GALLERY);

        VehicleImage secondaryImage2 = new VehicleImage();
        secondaryImage2.setVehicle(vehicle);
        secondaryImage2.setImageType(ImageType.GALLERY);
        secondaryImage2.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Bentley_Bentayga_V8_%28FL%29_IMG_4117.jpg/1920px-Bentley_Bentayga_V8_%28FL%29_IMG_4117.jpg");
        secondaryImage2.setImageAlt("Bentayga Tył 2");

        vehicleImageService.addVehicleImage(mainImage);
        vehicleImageService.addVehicleImage(secondaryImage);
        vehicleImageService.addVehicleImage(secondaryImage2);


    }

}
