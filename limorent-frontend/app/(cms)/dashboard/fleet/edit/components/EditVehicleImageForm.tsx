"use client"
import {Button} from "@/app/(main)/components/ui/button";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import {Label} from "@/app/(main)/components/ui/label";
import {Input} from "@/app/(main)/components/ui/input";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {
    VehicleImageRequest,
    VehicleImageResponse,
    VehiclePriceRequest,
    VehiclePriceResponse,
    VehicleRequest
} from "@/app/(cms)/dashboard/fleet/fleet.types";
import {updateVehicleById, updateVehicleImageById, updateVehiclePriceById} from "@/app/(cms)/dashboard/fleet/actions";
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

        const updatedImage: VehicleImageRequest = {
            vehicleId: input.vehicleImage.vehicleId,
            imageType: data.imageType,
            imageUrl: data.imageUrl,
            imageAlt: data.imageAlt
        };

        await updateVehicleImageById(input.vehicleImage.id, updatedImage);

        toast({
            description: "Zdjęcie zaktualizowane!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/${input.vehicleImage.vehicleId}`);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className={"space-y-4"}>
                            <div className={"flex flex-col space-y-2"}>
                                <Label htmlFor={"imageType"}>Rodzaj</Label>
                                <select id={"imageType"} {...register("imageType", {required: true})} defaultValue={input.vehicleImage.imageType}>
                                    <option value={"MAIN"}>Główne</option>
                                    <option value={"GALLERY"}>Galeria</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor={"imageUrl"}>Link do zdjęcia</Label>
                                <Input id={"imageUrl"}
                                       {...register("imageUrl", {required: true})}
                                       defaultValue={input.vehicleImage.imageUrl}/>
                            </div>
                            <div>
                                <Label htmlFor={"imageAlt"}>Tekst alternatywny</Label>
                                <Input id={"imageAlt"}
                                       {...register("imageAlt", {required: true})}
                                       defaultValue={input.vehicleImage.imageAlt}/>
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