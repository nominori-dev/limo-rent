import {VehicleImageResponse, VehiclePriceResponse, VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {getImagesByVehicleId, getPriceByVehicleId, getVehicleById} from "@/app/dashboard/fleet/actions";
import {Button} from "@/app/components/ui/button";
import * as React from "react";
import {MainNav} from "@/app/dashboard/components/main-nav";
import {UserNav} from "@/app/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/app/components/ui/table";
import Link from "next/link";
import markdownToHtml from "@/app/components/mdx/lib/mdxToHtml";
import EditVehicleForm from "@/app/dashboard/fleet/edit/components/EditVehicleForm";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/app/components/ui/dialog";
import EditVehiclePriceForm from "@/app/dashboard/fleet/edit/components/EditVehiclePriceForm";
import EditVehicleImageForm from "@/app/dashboard/fleet/edit/components/EditVehicleImageForm";
import AddVehicleImageForm from "../components/AddVehicleImageForm";
import DeleteVehicleImageForm from "../components/DeleteVehicleImageForm";
import AddVehiclePriceForm from "@/app/dashboard/fleet/edit/components/AddVehiclePriceForm";
import DeleteVehiclePriceForm from "@/app/dashboard/fleet/edit/components/DeleteVehiclePriceForm";

export default async function VehiclePage({
                                              params,
                                          }: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const vehicle: VehicleResponse = await getVehicleById(id);
    const vehicleImages: VehicleImageResponse[] = await getImagesByVehicleId(id);
    const vehiclePrices: VehiclePriceResponse[] = await getPriceByVehicleId(id);

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
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <Link href={"/dashboard/fleet"}><Button className={"tracking-tight"}>Wróć do zarządzania
                        flotą</Button></Link>
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
                                            <Dialog>
                                                <DialogTrigger asChild><Button variant={"destructive"}>Usuń</Button></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Zmiana ceny wynajmu</DialogTitle>
                                                        <DeleteVehiclePriceForm vehiclePrice={price}/>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                            <Dialog>
                                                <DialogTrigger asChild><Button>Zmień</Button></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Zmiana ceny wynajmu</DialogTitle>
                                                    </DialogHeader>
                                                    <EditVehiclePriceForm vehiclePrice={price}/>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
                <div className={"text-right"}>
                    <Dialog>
                        <DialogTrigger asChild><Button>Dodaj nową cenę</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Dodawanie nowej ceny</DialogTitle>
                            </DialogHeader>
                            <AddVehiclePriceForm vehicle={vehicle}/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <Table>
                    <TableCaption>Galeria</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={"text-center"}>Rodzaj</TableHead>
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
                                        <Link href={image.imageUrl}>{image.imageUrl}</Link>
                                    </TableCell>
                                    <TableCell>
                                        {image.imageAlt}
                                    </TableCell>
                                    <TableCell>
                                        <div className={"space-x-2"}>
                                            <Dialog>
                                                <DialogTrigger asChild><Button variant={"destructive"}>Usuń</Button></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Czy chcesz usunąć zdjęcie?</DialogTitle>
                                                    </DialogHeader>
                                                    <DeleteVehicleImageForm vehicleImage={image}/>
                                                </DialogContent>
                                            </Dialog>
                                            <Dialog>
                                                <DialogTrigger asChild><Button>Zmień</Button></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edycja zdjęcia</DialogTitle>
                                                    </DialogHeader>
                                                    <EditVehicleImageForm vehicleImage={image}/>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
                <div className={"text-right"}>
                    <Dialog>
                        <DialogTrigger asChild><Button>Dodaj nowe zdjęcie</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Dodawanie nowego zdjęcia</DialogTitle>
                            </DialogHeader>
                            <AddVehicleImageForm vehicle={vehicle}/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )

}