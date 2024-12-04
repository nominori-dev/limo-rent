package com.nominori.limorentbackend.configuration;

import com.nominori.limorentbackend.model.ImageType;
import com.nominori.limorentbackend.model.VehicleClass;
import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehicleImage;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.service.*;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DemoDataInitializer {

    private final VehicleService vehicleService;
    private final VehiclePriceService vehiclePriceService;
    private final VehicleImageService vehicleImageService;
    private final PostService postService;

    @PostConstruct
    public void initializeDemoData() {
        for (int i = 1; i <= 4; i++) {
            // Create Vehicle instance
            Vehicle vehicle = new Vehicle(
                    "Bentley Bentayga 2024",
                    VehicleClass.LUXURY,
                    "<h1>Standardowe wyposażenie pojazdu obejmuje m.in. system ABS i ESP, elektryczne sterowanie szyb, elektryczne sterowanie lusterek...</h1>",
                    4L,
                    2L
            );
            vehicle = vehicleService.add(vehicle);

            // Create VehiclePrice instances
            VehiclePrice price1 = new VehiclePrice(vehicle, "Godzina (hour)", 30000L);
            VehiclePrice price2 = new VehiclePrice(vehicle, "Kilometry", 7500L);

            vehiclePriceService.addVehiclePrice(price1);
            vehiclePriceService.addVehiclePrice(price2);

            // Create VehicleImage instances
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

        postService.createPost(new Post(
                "Wynajem limuzyny na wesele",
                "services",
                "---\npreviewImage: https://i.imgur.com/6rRyMZV.jpeg\n---\n## Elegancja i komfort na Twoim weselu\nNasza usługa wynajmu limuzyny na wesele zapewni niezapomniane wrażenia i wyjątkowy komfort w jednym z najważniejszych dni w Twoim życiu.",
                "wynajem-limuzyny-wesele",
                "Wynajem limuzyny na wesele",
                "Zarezerwuj luksusową limuzynę na swoje wesele, aby zapewnić elegancję i niezapomniane chwile."
        ));

        postService.createPost(new Post(
                "Transfer VIP na lotnisko",
                "services",
                "---\npreviewImage: https://i.imgur.com/6rRyMZV.jpeg\n---\n## Profesjonalizm i punktualność\nZapewniamy transfer VIP na lotnisko w ekskluzywnych pojazdach, abyś mógł podróżować w najwyższym komforcie.",
                "transfer-vip-lotnisko",
                "Transfer VIP na lotnisko",
                "Skorzystaj z naszej usługi transferu VIP, która łączy punktualność, luksus i profesjonalizm."
        ));

        postService.createPost(new Post(
                "Luksusowy wynajem na imprezy firmowe",
                "services",
                "---\npreviewImage: https://i.imgur.com/6rRyMZV.jpeg\n---\n## Prestiż dla Twojej firmy\nOferujemy wynajem limuzyn na imprezy firmowe, aby zapewnić prestiżowy transport dla Twoich pracowników i klientów.",
                "wynajem-imprezy-firmowe",
                "Luksusowy wynajem na imprezy firmowe",
                "Podnieś standard swoich imprez firmowych dzięki naszej usłudze wynajmu luksusowych limuzyn."
        ));

        postService.createPost(new Post(
                "Wieczór panieński w limuzynie",
                "services",
                "---\npreviewImage: https://i.imgur.com/6rRyMZV.jpeg\n---\n## Niezapomniana noc dla przyjaciółek\nSpędź wieczór panieński w stylu dzięki wynajmowi naszej limuzyny, która zapewni niezapomniane wrażenia i doskonałą zabawę.",
                "wieczor-panienski-limuzyna",
                "Wieczór panieński w limuzynie",
                "Zorganizuj wieczór panieński, który zapamiętasz na długo dzięki naszej luksusowej limuzynie."
        ));

        postService.createPost(new Post(
                "5 powodów, by wybrać limuzynę na specjalne okazje",
                "blog",
                "## Komfort i styl\nLimuzyny to synonim luksusu. Dowiedz się, dlaczego warto wybrać je na ważne wydarzenia, takie jak wesela, urodziny czy wieczory panieńskie.",
                "5-powodow-limuzyna-okazje",
                "5 powodów, by wybrać limuzynę na specjalne okazje",
                "Poznaj pięć głównych powodów, dla których limuzyna to idealny wybór na każdą wyjątkową okazję."
        ));

        postService.createPost(new Post(
                "Jak przygotować się do wynajmu luksusowego pojazdu?",
                "blog",
                "## Praktyczne wskazówki\nChcesz wynająć luksusowy pojazd? Oto kilka praktycznych porad, które pomogą Ci wybrać odpowiedni model i zorganizować wszystko bez stresu.",
                "jak-przygotowac-wynajem-luksusowy-pojazd",
                "Jak przygotować się do wynajmu luksusowego pojazdu?",
                "Dowiedz się, jak zaplanować wynajem luksusowego pojazdu i uniknąć typowych błędów."
        ));
    }
}

