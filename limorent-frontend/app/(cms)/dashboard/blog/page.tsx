import {Button} from "@/app/(main)/components/ui/button"
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs"
import {MainNav} from "../components/main-nav";
import {UserNav} from "@/app/(cms)/dashboard/components/user-nav";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/(main)/components/ui/table";
import Link from "next/link";
import {PostResponse} from "@/app/(cms)/dashboard/services/services.types";
import {getBlogPosts} from "@/app/(cms)/dashboard/blog/actions";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/app/(main)/components/ui/dialog";
import DeleteVehicleForm from "@/app/(cms)/dashboard/fleet/edit/components/DeleteVehicleForm";
import * as React from "react";
import DeletePostDialog from "../shared/components/DeletePostDialog";

export default async function ServicesPostsPage() {

    const posts: PostResponse[] = await getBlogPosts();

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
                    <h2 className="text-3xl font-bold tracking-tight">Zarządzanie blogiem</h2>
                    <div className="flex items-center space-x-2">
                        <Link href={"./blog/add"}>
                            <Button>Dodaj nowy post</Button>
                        </Link>
                        <Button>Pobierz listę</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <div className="overflow-x-auto w-full">
                                <Table>
                                    <TableCaption>Ostatnie posty</TableCaption>
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
                                                            <Link href={`./blog/${post.slug}`}><Button>Zobacz</Button></Link>
                                                            <Link href={`./blog/edit/${post.slug}`}><Button>Edytuj</Button></Link>
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