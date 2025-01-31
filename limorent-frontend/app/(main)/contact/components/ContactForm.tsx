'use client';

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { getWithExpiry, setWithExpire } from "@/app/(main)/components/util/kvStorage";
import { Button } from "@/app/(main)/components/ui/button";
import { Input } from "@/app/(main)/components/ui/input";
import { Textarea } from "@/app/(main)/components/ui/textarea";
import { Card } from "@/app/(main)/components/ui/card";
import { Label } from "@/app/(main)/components/ui/label";
import { Toast } from "@/app/(main)/components/ui/toast";
import {useToast} from "@/app/hooks/use-toast";
import {OfferRequest} from "@/app/(cms)/dashboard/customers/customer.types";
import {generateOffer} from "@/app/(cms)/dashboard/customers/actions";
import {VehicleResponse} from "@/app/(cms)/dashboard/fleet/fleet.types";

type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    specialRequests: string;
    vehicleId: number;
};

export interface ContactOptions {
    vehicles: VehicleResponse[];
}

export default function ContactForm({vehicles}: ContactOptions) {
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isRequestSend, setRequestSend] = useState(false);
    const { toast } = useToast();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (getWithExpiry("formSubmit") !== null) {
            alert("Odczekaj przed wysłaniem formularza.");
            return;
        }

        const form: OfferRequest = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            specialRequests: data.specialRequests,
            vehicleId: data.vehicleId,
        };

        await generateOffer(form);

        setRequestSend(true);
        toast({
            description: "Wiadomość wysłana!",
            variant: "default",
        });
        setTimeout(() => setRequestSend(false), 3000);
        setWithExpire("formSubmit", "true", 5000);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="p-6 space-y-6 mx-auto">
                <div className={"space-y-2"}>
                    <div>
                        <Label htmlFor="firstName">Imię</Label>
                        <Input id="firstName" placeholder="Wprowadź imię" {...register("firstName", {required: true})} />
                    </div>
                    <div>
                        <Label htmlFor="lastName">Nazwisko</Label>
                        <Input id="lastName" placeholder="Wprowadź nazwisko" {...register("lastName", {required: true})} />
                    </div>
                    <div>
                        <Label htmlFor="email">Adres E-Mail</Label>
                        <Input id="email" type="email" placeholder="E-mail" {...register("email", {required: true})} />
                    </div>
                    <div>
                        <Label htmlFor="phoneNumber">Telefon</Label>
                        <Input id="phoneNumber" type="tel" {...register("phoneNumber", {required: true})} />
                    </div>
                    <div>
                        <label htmlFor="vehicle" className="label">
                            <span className="label-text">Wybrany samochód:</span>
                        </label>
                        <select
                            className="select select-bordered select-primary w-full" {...register("vehicleId", {required: true})}>
                            {
                                vehicles.map(vehicle => (
                                    <option key={vehicle.id} value={vehicle.id}>{vehicle.vehicleName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="specialRequests">Inf. dodatkowe</Label>
                        <Textarea id="specialRequests"
                                  placeholder="Wprowadź tekst" {...register("specialRequests", {required: true})} />
                    </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                </Button>
            </Card>

            <Toast/>
        </form>
    );
}
