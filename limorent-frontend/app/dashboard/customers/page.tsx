import {Button} from "@/app/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/app/components/ui/card"
import {Tabs, TabsContent} from "@/app/components/ui/tabs"
import {Metadata} from "next";
import {Search} from "../components/search";
import {MainNav} from "../components/main-nav";
import {CalendarDateRangePicker} from "@/app/dashboard/components/date-range-picker";
import {UserNav} from "@/app/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import {redirect} from "next/navigation";
import Link from "next/link";
import {CustomerResponse} from "@/app/dashboard/customers/customer.types";
import {getCustomers} from "@/app/dashboard/customers/actions";

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
                        <Search/>
                        <UserNav/>
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Zarządzanie klientami</h2>
                    <div className="flex items-center space-x-2">
                        <CalendarDateRangePicker/>
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
                                                            <Link href={`./customer/${customer.id}`}><Button>Zobacz</Button></Link>
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