"use client"
import {Button} from "@/app/(main)/components/ui/button";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import {Label} from "@/app/(main)/components/ui/label";
import {Input} from "@/app/(main)/components/ui/input";
import {Textarea} from "@/app/(main)/components/ui/textarea";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {VehiclePriceRequest, VehiclePriceResponse, VehicleRequest} from "@/app/(cms)/dashboard/fleet/fleet.types";
import {updateVehicleById, updateVehiclePriceById} from "@/app/(cms)/dashboard/fleet/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    vehicleId: number;
    priceTitle: string;
    price: number;
}

interface UpdateFormInput {
    vehiclePrice: VehiclePriceResponse;
}

export default function EditVehiclePriceForm(input: UpdateFormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const updatedPrice: VehiclePriceRequest = {
            vehicleId: input.vehiclePrice.vehicle.id,
            priceTitle: data.priceTitle,
            price: data.price
        };

        await updateVehiclePriceById(input.vehiclePrice.id, updatedPrice);

        toast({
            description: "Cena zaktualizowana!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/${input.vehiclePrice.vehicle.id}`);
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
                                       placeholder={"Wprowadź tytuł"} defaultValue={input.vehiclePrice.priceTitle}/>
                            </div>
                            <div>
                                <Label htmlFor={"price"}>Cena</Label>
                                <Input id={"price"}
                                       type={"number"} {...register("price", {required: true})}
                                       defaultValue={input.vehiclePrice.price}/>
                            </div>
                            <div>
                                <Button type={"submit"}>Zapisz</Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}