import {Button} from "@/app/components/ui/button"
import {Tabs, TabsContent} from "@/app/components/ui/tabs"
import {Metadata} from "next";
import {MainNav} from "../components/main-nav";
import {UserNav} from "@/app/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import Link from "next/link";
import {PostResponse} from "@/app/dashboard/services/services.types";
import {getServicesPosts} from "@/app/dashboard/services/actions";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/app/components/ui/dialog";
import DeletePostDialog from "@/app/dashboard/shared/components/DeletePostDialog";
import * as React from "react";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default async function ServicesPostsPage() {

    const posts: PostResponse[] = await getServicesPosts();

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
                    <h2 className="text-3xl font-bold tracking-tight">Zarządzanie usługami</h2>
                    <div className="flex items-center space-x-2">
                        <Link href={"./services/add"}>
                            <Button>Dodaj nową usługę</Button>
                        </Link>
                        <Button>Pobierz listę</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <div className="overflow-x-auto w-full">
                                <Table>
                                    <TableCaption>Lista usług</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ID</TableHead>
                                            <TableHead>Tytuł</TableHead>
                                            <TableHead>Kategoria</TableHead>
                                            <TableHead>Krótki URL</TableHead>
                                            <TableHead>Data dodania</TableHead>
                                            <TableHead>Akcje</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            posts.map(post => (
                                                <TableRow key={post.id} id={post.id!.toString()}>
                                                    <TableCell>
                                                        {post.id}
                                                    </TableCell>
                                                    <TableCell>
                                                        {post.title}
                                                    </TableCell>
                                                    <TableCell>
                                                        {post.category}
                                                    </TableCell>
                                                    <TableCell>
                                                        {post.slug}
                                                    </TableCell>
                                                    <TableCell>
                                                        {post.createdAt}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={"space-x-2"}>
                                                            <Link href={`./services/${post.slug}`}><Button>Zobacz</Button></Link>
                                                            <Link href={`./services/edit/${post.slug}`}><Button>Edytuj</Button></Link>
                                                            <Dialog>
                                                                <DialogTrigger asChild><Button variant={"destructive"}>Usuń</Button></DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogHeader>
                                                                        <DialogTitle>Czy chcesz usunąć post?</DialogTitle>
                                                                    </DialogHeader>
                                                                    <DeletePostDialog post={post}/>
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