"use client"
import {PostRequest, PostResponse} from "@/app/dashboard/services/services.types";
import Link from "next/link";
import {Button} from "@/app/components/ui/button";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Label} from "@/app/components/ui/label";
import {Input} from "@/app/components/ui/input";
import {Textarea} from "@/app/components/ui/textarea";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {updateServiceById} from "@/app/dashboard/services/actions";
import { useRouter } from 'next/navigation'
import {VehicleRequest, VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {updateVehicleById} from "@/app/dashboard/fleet/actions";

type Inputs = {
    vehicleName: string;
    vehicleClass: "BUSINESS" | "LUXURY" | "LUXURY_SUV" | "LUXURY_MPV" | "LUXURY_COACH";
    vehicleDescription?: string;
    vehicleLuggage?: number;
    vehiclePassenger?: number;
}

interface UpdateFormInput {
    vehicle: VehicleResponse;
}

export default function EditVehicleForm(input: UpdateFormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const updatedVehicle: VehicleRequest = {
            vehicleName: data.vehicleName,
            vehicleClass: data.vehicleClass,
            vehiclePassenger: data.vehiclePassenger,
            vehicleDescription: data.vehicleDescription,
            vehicleLuggage: data.vehicleLuggage,
        };

        await updateVehicleById(input.vehicle.id, updatedVehicle);

        toast({
            description: "Dane samochodu zaktualizowane!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/${input.vehicle.id}`);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className={"space-y-2"}>
                            <div>
                                <Label htmlFor={"vehicleName"}>Nazwa samochodu</Label>
                                <Input id={"vehicleName"} {...register("vehicleName", {required: true})}
                                       placeholder={"Wprowadź nazwę"} defaultValue={input.vehicle.vehicleName}/>
                            </div>
                            <div>
                                <Label htmlFor={"vehicleLuggage"}>Bagaż:</Label>
                                <Input id={"vehicleLuggage"}
                                       type={"number"} {...register("vehicleLuggage", {required: true})}
                                       defaultValue={input.vehicle.vehicleLuggage}/>
                            </div>
                            <div>
                                <Label htmlFor={"vehiclePassenger"}>Liczba pasażerów:</Label>
                                <Input id={"vehiclePassenger"}
                                       type={"number"} {...register("vehiclePassenger", {required: true})}
                                       defaultValue={input.vehicle.vehiclePassenger}/>
                            </div>
                            <div>
                                <Label htmlFor={"vehicleDescription"}>Opis samochodu</Label>
                                <Textarea
                                    id={"vehicleDescription"} {...register("vehicleDescription", {required: true})}
                                    placeholder={"Wprowadź opis samochodu"}
                                    defaultValue={input.vehicle.vehicleDescription}/>
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