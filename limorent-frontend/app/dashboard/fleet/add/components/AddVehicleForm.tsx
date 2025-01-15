"use client"
import {Button} from "@/app/components/ui/button";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import {Label} from "@/app/components/ui/label";
import {Input} from "@/app/components/ui/input";
import {Textarea} from "@/app/components/ui/textarea";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import { useRouter } from 'next/navigation'
import {VehicleRequest} from "@/app/dashboard/fleet/fleet.types";
import {addVehicle, updateVehicleById} from "@/app/dashboard/fleet/actions";

type Inputs = {
    vehicleName: string;
    vehicleClass: "BUSINESS" | "LUXURY" | "LUXURY_SUV" | "LUXURY_MPV" | "LUXURY_COACH";
    vehicleDescription?: string;
    vehicleLuggage?: number;
    vehiclePassenger?: number;
}

export default function AddVehicleForm(){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const vehicle: VehicleRequest = {
            vehicleName: data.vehicleName,
            vehicleClass: data.vehicleClass,
            vehiclePassenger: data.vehiclePassenger,
            vehicleDescription: data.vehicleDescription,
            vehicleLuggage: data.vehicleLuggage,
        };

        const id = await addVehicle(vehicle).then((data) => {
            return data.id
        })

        toast({
            description: "Dane samochodu zaktualizowane!",
            variant: "default",
        });

        router.push(`/dashboard/fleet/edit/${id}`);
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
                                       placeholder={"Wprowadź nazwę"}/>
                            </div>
                            <div>
                                <Label htmlFor={"vehicleLuggage"}>Bagaż:</Label>
                                <Input id={"vehicleLuggage"}
                                       type={"number"} {...register("vehicleLuggage", {required: true})}
                                       />
                            </div>
                            <div>
                                <Label htmlFor={"vehiclePassenger"}>Liczba pasażerów:</Label>
                                <Input id={"vehiclePassenger"}
                                       type={"number"} {...register("vehiclePassenger", {required: true})}/>
                            </div>
                            <div>
                                <Label htmlFor={"vehicleClass"}>Rodzaj pojazdu:</Label>
                                <select id={"vehicleClass"}
                                        {...register("vehicleClass", {required: true})}>
                                    <option value={"BUSINESS"}>BUSINESS</option>
                                    <option value={"LUXURY"}>LUXURY</option>
                                    <option value={"LUXURY_SUV"}>LUXURY SUV</option>
                                    <option value={"LUXURY_MPV"}>LUXURY MPV</option>
                                    <option value={"LUXURY_COACH"}>LUXURY COACH</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor={"vehicleDescription"}>Opis samochodu</Label>
                                <Textarea
                                    id={"vehicleDescription"} {...register("vehicleDescription", {required: true})}
                                    placeholder={"Wprowadź opis samochodu"}/>
                            </div>
                            <div className={"space-x-2"}>
                                <Button variant={"destructive"}>Anuluj</Button>
                                <Button type={"submit"}>Dodaj</Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}