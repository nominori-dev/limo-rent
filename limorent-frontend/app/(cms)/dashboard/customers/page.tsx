import {Button} from "@/app/(main)/components/ui/button"
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs"
import {Metadata} from "next";
import {MainNav} from "../components/main-nav";
import {UserNav} from "@/app/(cms)/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/(main)/components/ui/table";
import Link from "next/link";
import {CustomerResponse} from "@/app/(cms)/dashboard/customers/customer.types";
import {getCustomers} from "@/app/(cms)/dashboard/customers/actions";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/app/(main)/components/ui/dialog";
import EditVehicleImageForm from "@/app/(cms)/dashboard/fleet/edit/components/EditVehicleImageForm";
import * as React from "react";
import DeleteCustomerDialog from "./components/DeleteCustomerDialog";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default async function CustomersPage() {
    const customers: CustomerResponse[] = await getCustomers();

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
                    <h2 className="text-3xl font-bold tracking-tight">Zarządzanie klientami</h2>
                    <div className="flex items-center space-x-2">
                        <Button>Pobierz listę</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <div className="overflow-x-auto w-full">
                                <Table>
                                    <TableCaption>Lista klientów</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Imię</TableHead>
                                            <TableHead>Nazwisko</TableHead>
                                            <TableHead>E-Mail</TableHead>
                                            <TableHead>Telefon</TableHead>
                                            <TableHead>Wybrany samochód</TableHead>
                                            <TableHead>Akcje</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            customers.map(customer => (
                                                <TableRow key={customer.id} id={customer.id!.toString()}>
                                                    <TableCell>
                                                        {customer.id}
                                                    </TableCell>
                                                    <TableCell>
                                                        {customer.firstName}
                                                    </TableCell>
                                                    <TableCell>
                                                        {customer.lastName}
                                                    </TableCell>
                                                    <TableCell>
                                                        {customer.email}
                                                    </TableCell>
                                                    <TableCell>
                                                        {customer.phoneNumber}
                                                    </TableCell>
                                                    <TableCell>
                                                        {customer.selectedVehicle?.vehicleName}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={"space-x-2"}>
                                                            <Dialog>
                                                                <DialogTrigger asChild><Button variant={"destructive"}>Usuń</Button></DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogHeader>
                                                                        <DialogTitle>Czy chcesz usunąć klienta?</DialogTitle>
                                                                    </DialogHeader>
                                                                    <DeleteCustomerDialog id={customer.id}/>
                                                                </DialogContent>
                                                            </Dialog>
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