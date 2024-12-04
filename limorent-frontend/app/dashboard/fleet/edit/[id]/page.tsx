import {VehicleImageResponse, VehiclePriceResponse, VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {getImagesByVehicleId, getPriceByVehicleId, getVehicleById} from "@/app/dashboard/fleet/actions";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card";
import Image from "next/image";
import {Button} from "@/app/components/ui/button";
import * as React from "react";
import {MainNav} from "@/app/dashboard/components/main-nav";
import {Search} from "@/app/dashboard/components/search";
import {UserNav} from "@/app/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/app/components/ui/table";
import Link from "next/link";
import markdownToHtml from "@/app/components/mdx/lib/mdxToHtml";
import EditVehicleForm from "@/app/dashboard/fleet/edit/components/EditVehicleForm";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import EditVehiclePriceForm from "@/app/dashboard/fleet/edit/components/EditVehiclePriceForm";

export default async function VehiclePage({
                                              params,
                                          }: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const vehicle: VehicleResponse = await getVehicleById(id);
    const vehicleImages: VehicleImageResponse[] = await getImagesByVehicleId(id);
    const vehiclePrices: VehiclePriceResponse[] = await getPriceByVehicleId(id);

    const content = await markdownToHtml(vehicle.vehicleDescription || "");

    return (
        <div className={"pt-10"}>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6"/>
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav/>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between space-y-2">
                <div className="flex items-center space-x-2">
                    <Link href={"/dashboard/fleet"}>
                        <Button>Wróć do floty</Button>
                    </Link>
                </div>
            </div>
            <div className={"w-[40%]"}>
                <EditVehicleForm vehicle={vehicle}/>
            </div>
            <div className="overflow-x-auto flex flex-col align-center justify-center text-center">
                <Table>
                    <TableCaption>Cennik</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={"text-center"}>ID</TableHead>
                            <TableHead className={"text-center"}>Tytuł</TableHead>
                            <TableHead className={"text-center"}>Cena</TableHead>
                            <TableHead className={"text-center"}>Akcje</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            vehiclePrices.map(price => (
                                <TableRow key={price.id} id={price.id!.toString()}>
                                    <TableCell>
                                        {price.id}
                                    </TableCell>
                                    <TableCell>
                                        {price.priceTitle}
                                    </TableCell>
                                    <TableCell>
                                        {price.price / 100} zł
                                    </TableCell>
                                    <TableCell>
                                        <div className={"space-x-2"}>
                                            <Button variant={"destructive"}>Usuń</Button>
                                        </div>
                                        <Dialog>
                                            <DialogTrigger>Zmień</DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Zmiana ceny wynajmu</DialogTitle>
                                                    <EditVehiclePriceForm vehiclePrice={price}/>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </div>
            <div>
                <Table>
                    <TableCaption>Galeria</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={"text-center"}>Typ</TableHead>
                            <TableHead className={"text-center w-44"}>Link</TableHead>
                            <TableHead className={"text-center"}>Tekst alt.</TableHead>
                            <TableHead className={"text-center"}>Akcje</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            vehicleImages.map(image => (
                                <TableRow key={image.id} id={image.id!.toString()}>
                                    <TableCell>
                                        {image.imageType}
                                    </TableCell>
                                    <TableCell>
                                        {image.imageUrl}
                                    </TableCell>
                                    <TableCell>
                                        {image.imageAlt}
                                    </TableCell>
                                    <TableCell>
                                        <div className={"space-x-2"}>
                                            <Button variant={"destructive"}>Usuń</Button>
                                        </div>
                                        <Dialog>
                                            <DialogTrigger>Zmień</DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Edycja zdjęcia</DialogTitle>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
    )

}