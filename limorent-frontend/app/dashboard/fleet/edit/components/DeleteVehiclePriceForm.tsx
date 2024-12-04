"use client"
import {Button} from "@/app/components/ui/button";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {
    VehicleImageResponse, VehiclePriceResponse,
} from "@/app/dashboard/fleet/fleet.types";
import {deleteVehiclePriceById} from "@/app/dashboard/fleet/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    remove: boolean
}

interface FormInput {
    vehiclePrice: VehiclePriceResponse;
}

export default function DeleteVehiclePriceForm({vehiclePrice}: FormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { handleSubmit } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        await deleteVehiclePriceById(vehiclePrice.id);

        toast({
            description: "Cena usunięta!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/${vehiclePrice.vehicle.id}`);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <Button variant={"destructive"} type={"submit"}>Usuń cenę</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}