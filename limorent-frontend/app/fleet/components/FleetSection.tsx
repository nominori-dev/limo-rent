import * as React from "react";
import {VehicleImageResponse, VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {getVehicleImages, getVehicles} from "@/app/dashboard/fleet/actions";
import FleetCard from "@/app/fleet/components/FleetCard";


export default async function FleetSection(){
    const vehicles: VehicleResponse[] = await getVehicles();
    const vehiclesImages: VehicleImageResponse[] = await getVehicleImages();

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8'}>
            {vehicles.map((vehicle, index) => (
                <FleetCard key={index} heading={vehicle.vehicleName} description={`Rodzaj: ${vehicle.vehicleClass}`}
                             url={`/fleet/${vehicle.id}`}
                             imageSrc={vehiclesImages.find(image => image.imageType === "MAIN" && image.vehicleId == vehicle.id)!.imageUrl}/>
            ))}
        </div>
    )
}