"use client"
import {Button} from "@/app/components/ui/button";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Label} from "@/app/components/ui/label";
import {Input} from "@/app/components/ui/input";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {
    VehicleImageRequest,
    VehicleImageResponse,
    VehiclePriceRequest,
    VehiclePriceResponse,
    VehicleRequest, VehicleResponse
} from "@/app/dashboard/fleet/fleet.types";
import {
    addVehicleImage,
    updateVehicleById,
    updateVehicleImageById,
    updateVehiclePriceById
} from "@/app/dashboard/fleet/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    vehicleId: number;
    imageType: "MAIN" | "GALLERY";
    imageUrl: string;
    imageAlt?: string;
}

interface UpdateFormInput {
    vehicle: VehicleResponse;
}

export default function AddVehicleImageForm(input: UpdateFormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const image: VehicleImageRequest = {
            vehicleId: input.vehicle.id,
            imageType: data.imageType,
            imageUrl: data.imageUrl,
            imageAlt: data.imageAlt
        };

        await addVehicleImage(image);

        toast({
            description: "Zdjęcie dodane pomyślnie!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/${input.vehicle.id}`);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className={"space-y-4"}>
                            <div className={"flex flex-col space-y-2"}>
                                <Label htmlFor={"imageType"}>Rodzaj</Label>
                                <select id={"imageType"} {...register("imageType", {required: true})}>
                                    <option value={"MAIN"}>Główne</option>
                                    <option value={"GALLERY"}>Galeria</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor={"imageUrl"}>Link do zdjęcia</Label>
                                <Input id={"imageUrl"}
                                       {...register("imageUrl", {required: true})}
                                       placeholder={"Wprowadź link do zdjęcia"}/>
                            </div>
                            <div>
                                <Label htmlFor={"imageAlt"}>Tekst alternatywny</Label>
                                <Input id={"imageAlt"}
                                       {...register("imageAlt", {required: true})}
                                       placeholder={"Wprowadź tekst alternatywny"}/>
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