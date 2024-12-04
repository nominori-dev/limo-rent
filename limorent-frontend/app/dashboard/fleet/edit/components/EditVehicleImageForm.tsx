"use client"
import {Button} from "@/app/components/ui/button";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Label} from "@/app/components/ui/label";
import {Input} from "@/app/components/ui/input";
import {Textarea} from "@/app/components/ui/textarea";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {
    VehicleImageResponse,
    VehiclePriceRequest,
    VehiclePriceResponse,
    VehicleRequest
} from "@/app/dashboard/fleet/fleet.types";
import {updateVehicleById, updateVehiclePriceById} from "@/app/dashboard/fleet/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    vehicleId: number;
    imageType: "MAIN" | "GALLERY";
    imageUrl: string;
    imageAlt?: string;
}

interface UpdateFormInput {
    vehicleImage: VehicleImageResponse;
}

export default function EditVehicleImageForm(input: UpdateFormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const updatedImage: VehiclePriceRequest = {
            vehicleId: input.vehicleImage.vehicleId,
            imageType: data.imageType,
            imageUrl: data.imageUrl,
            imageAlt?: data.imageAlt
        };

        await updateVehicleImageById(input.vehicleImage.id, updatedImage);

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