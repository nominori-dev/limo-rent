"use client"
import {Button} from "@/app/(main)/components/ui/button";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {
    VehicleResponse,
} from "@/app/(cms)/dashboard/fleet/fleet.types";
import {deleteVehicleById} from "@/app/(cms)/dashboard/fleet/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    remove: boolean
}

interface FormInput {
    vehicle: VehicleResponse;
}

export default function DeleteVehicleForm({vehicle}: FormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { handleSubmit } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        await deleteVehicleById(vehicle.id);

        toast({
            description: "Samochód usunięty!",
            variant: "default",
        });

        router.refresh();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <Button variant={"destructive"} type={"submit"}>Usuń samochód</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}