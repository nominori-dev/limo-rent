"use client"
import {PostRequest, PostResponse} from "@/app/(cms)/dashboard/services/services.types";
import Link from "next/link";
import {Button} from "@/app/(main)/components/ui/button";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import {Label} from "@/app/(main)/components/ui/label";
import {Input} from "@/app/(main)/components/ui/input";
import {Textarea} from "@/app/(main)/components/ui/textarea";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {addService} from "@/app/(cms)/dashboard/services/actions";
import {useRouter} from "next/navigation";

type Inputs = {
    title: string;
    content: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
}


export default function AddServiceForm(){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const newPost: PostRequest = {
            title: data.title,
            content: data.content,
            category: "services",
            slug: data.slug,
            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription
        };

        await addService(newPost);

        toast({
            description: "Usługa dodana pomyślnie!",
            variant: "default",
        });

        router.push("/dashboard/services")
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <Link href={"/app/(cms)/dashboard/services"}><Button className={"tracking-tight"}>Wróć do
                        usług</Button></Link>
                    <div className="flex items-center space-x-2">
                        <Button type={"submit"}>Zapisz</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className={"space-y-2"}>
                            <div>
                                <Label htmlFor={"title"}>Tytuł usługi</Label>
                                <Input id={"title"} {...register("title", {required: true})} placeholder={"Wprowadź tytuł"}/>
                            </div>
                            <div>
                                <Label htmlFor={"slug"}>Krótki adres URL</Label>
                                <Input id={"slug"} {...register("slug", {required: true})} placeholder={"Wprowadź krótki adres URL"}/>
                            </div>
                            <div>
                                <Label htmlFor={"metaTitle"}>SEO Tytuł:</Label>
                                <Input id={"metaTitle"} {...register("metaTitle", {required: true})} placeholder={"Wprowadź SEO tytuł"}/>
                            </div>
                            <div>
                                <Label htmlFor={"metaDescription"}>SEO Opis:</Label>
                                <Input id={"metaDescription"} {...register("metaDescription", {required: true})} placeholder={"Wprowadź SEO Opis"}/>
                            </div>
                            <div className={"grid w-full gap-1.5"}>
                                <Label htmlFor={"content"}>Treść usługi:</Label>
                                <Textarea {...register("content", {required: true})} placeholder={"Napisz treść usługi"} id={"content"}/>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}