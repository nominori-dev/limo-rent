"use client"
import {Button} from "@/app/components/ui/button";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "@/app/hooks/use-toast";
import {useRouter} from "next/navigation";
import {PostResponse} from "@/app/dashboard/blog/blog.types";
import {deletePostById} from "@/app/dashboard/blog/actions";

type Inputs = {
    remove: boolean
}

interface FormInput {
    post: PostResponse;
}

export default function DeleteVehicleForm({post}: FormInput){

    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { handleSubmit } = useForm<Inputs>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        await deletePostById(post.id);

        toast({
            description: "Post usunięty!",
            variant: "default",
        });

        window.location.reload(true);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div>
                            <Button variant={"destructive"} type={"submit"}>Usuń post</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}