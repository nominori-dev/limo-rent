"use client"
import {Button} from "@/app/(main)/components/ui/button";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import {Label} from "@/app/(main)/components/ui/label";
import {Input} from "@/app/(main)/components/ui/input";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {
    VehiclePriceRequest,
    VehicleResponse
} from "@/app/(cms)/dashboard/fleet/fleet.types";
import {addVehiclePrice} from "@/app/(cms)/dashboard/fleet/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    vehicleId: number;
    priceTitle: string;
    price: number;
}

interface FormInput {
    vehicle: VehicleResponse;
}

export default function AddVehiclePriceForm({vehicle}: FormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const price: VehiclePriceRequest = {
            vehicleId: vehicle.id,
            priceTitle: data.priceTitle,
            price: data.price
        };

        await addVehiclePrice(price);

        toast({
            description: "Cena dodana pomyślnie!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/${vehicle.id}`);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className={"space-y-2"}>
                            <div>
                                <Label htmlFor={"priceTitle"}>Tytuł</Label>
                                <Input id={"priceTitle"} {...register("priceTitle", {required: true})}
                                       placeholder={"Wprowadź tytuł"}/>
                            </div>
                            <div>
                                <Label htmlFor={"price"}>Cena</Label>
                                <Input id={"price"} pattern="[0-9]+([\.,][0-9]+)?" step="0.01"
                                       type={"number"} {...register("price", {required: true})}
                                       placeholder={"Wprowadź cenę"}/>
                            </div>
                            <div>
                                <Button type={"submit"}>Dodaj</Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}