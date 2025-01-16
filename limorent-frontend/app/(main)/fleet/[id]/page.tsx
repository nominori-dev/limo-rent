import {VehicleImageResponse, VehiclePriceResponse, VehicleResponse} from "@/app/(cms)/dashboard/fleet/fleet.types";
import {getImagesByVehicleId, getPriceByVehicleId, getVehicleById} from "@/app/(cms)/dashboard/fleet/actions";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/(main)/components/ui/card";
import Image from "next/image";
import {Button} from "@/app/(main)/components/ui/button";
import * as React from "react";
import {MainNav} from "@/app/(cms)/dashboard/components/main-nav";
import {Search} from "@/app/(cms)/dashboard/components/search";
import {UserNav} from "@/app/(cms)/dashboard/components/user-nav";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/app/(main)/components/ui/carousel";
import RetroGrid from "@/app/(main)/components/ui/retro-grid";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/app/(main)/components/ui/table";
import Link from "next/link";
import markdownToHtml from "@/app/(main)/components/mdx/lib/mdxToHtml";

export default async function LandingVehiclePage({
                                              params,
                                          }: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const vehicle: VehicleResponse = await getVehicleById(id);
    const vehicleImages: VehicleImageResponse[] = await getImagesByVehicleId(id);
    const vehiclePrices: VehiclePriceResponse[] = await getPriceByVehicleId(id);
    const mainImage = vehicleImages.find(image => image.imageType === "MAIN");

    const content = await markdownToHtml(vehicle.vehicleDescription || "");

    return (
        <div className={""}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <Link href={"/public"}><Button className={"tracking-tight"}>Wróć na główną</Button></Link>
                    <div className="flex items-center space-x-2">
                        <Button>Pobierz ofertę</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div
                            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                            <span
                                className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                               {vehicle.vehicleName}</span>
                            <RetroGrid/>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Ilość miejsc pasażerskich
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{vehicle.vehiclePassenger}</div>
                                    <p className="text-xs text-muted-foreground">
                                        + kierowca
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Bagaż
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{vehicle.vehicleLuggage}</div>
                                    <p className="text-xs text-muted-foreground">

                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Typ pojazdu</CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <rect width="20" height="14" x="2" y="5" rx="2"/>
                                        <path d="M2 10h20"/>
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{vehicle.vehicleClass}</div>
                                    <p className="text-xs text-muted-foreground">

                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            {content}
                        </div>
                        <div className="">
                            <Carousel className="w-full">
                                <CarouselContent className="-ml-1">
                                    {vehicleImages.map((photo, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-1 md:basis-1/2 lg:basis-1/3"
                                        >
                                            <div className="p-1">
                                                <Card className="relative overflow-hidden">
                                                    <CardContent
                                                        className="not-prose flex aspect-square items-center justify-center">
                                                        <Image
                                                            src={photo.imageUrl}
                                                            alt={photo.imageAlt!}
                                                            width={720}
                                                            height={480}
                                                            className="absolute inset-0 h-full w-full object-cover rounded-lg"
                                                        ></Image>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious/>
                                <CarouselNext/>
                            </Carousel>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div>
            <div className="overflow-x-auto flex flex-col align-center justify-center text-center">
                    <Table>
                        <TableCaption>Cennik</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={"text-center"}>ID</TableHead>
                                <TableHead className={"text-center"}>Tytuł</TableHead>
                                <TableHead className={"text-center"}>Cena</TableHead>
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
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    )

}