import {Button} from "@/app/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/components/ui/card"
import {Tabs, TabsContent} from "@/app/components/ui/tabs"
import {Metadata} from "next";
import {Search} from "../components/search";
import {MainNav} from "../components/main-nav";
import {CalendarDateRangePicker} from "@/app/dashboard/components/date-range-picker";
import {UserNav} from "@/app/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import {VehicleResponse} from "@/app/dashboard/fleet/fleet.types";
import {getVehicles} from "@/app/dashboard/fleet/actions";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default async function FleetPage() {

    const vehicles: VehicleResponse[] = await getVehicles();

    return (
        <div className="flex-col md:flex">
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
                    <h2 className="text-3xl font-bold tracking-tight">Zarządzanie flotą</h2>
                    <div className="flex items-center space-x-2">
                        <Button>Pobierz listę</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <div className="overflow-x-auto w-full">
                                <Table>
                                    <TableCaption>Lista samochodów</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>L.p.</TableHead>
                                            <TableHead>Nazwa</TableHead>
                                            <TableHead>Klasa</TableHead>
                                            <TableHead>Liczba miejsc</TableHead>
                                            <TableHead>Bagaż</TableHead>
                                            <TableHead>Akcje</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            vehicles.map(vehicle => (
                                                <TableRow key={vehicle.id} id={vehicle.id!.toString()}>
                                                    <TableCell>
                                                        {vehicle.id}
                                                    </TableCell>
                                                    <TableCell>
                                                        {vehicle.vehicleName}
                                                    </TableCell>
                                                    <TableCell>
                                                        {vehicle.vehicleClass}
                                                    </TableCell>
                                                    <TableCell>
                                                        {vehicle.vehiclePassenger}
                                                    </TableCell>
                                                    <TableCell>
                                                        {vehicle.vehicleLuggage}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={"space-x-2"}>
                                                            <Link href={`./fleet/${vehicle.id}`}><Button>Zobacz</Button></Link>
                                                            <Button variant={"destructive"}>Usuń</Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }

                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}