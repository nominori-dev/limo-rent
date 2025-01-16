import {Button} from "@/app/(main)/components/ui/button";
import * as React from "react";
import {MainNav} from "@/app/(cms)/dashboard/components/main-nav";
import {Search} from "@/app/(cms)/dashboard/components/search";
import {UserNav} from "@/app/(cms)/dashboard/components/user-nav";
import {getPostBySlug} from "@/app/(cms)/dashboard/services/actions";
import {PostResponse} from "@/app/(cms)/dashboard/services/services.types";
import UpdateServiceForm from "@/app/(cms)/dashboard/services/edit/[slug]/UpdateServiceForm";




export default async function EditServicePage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>
}) {

    const slug = (await params).slug;
    const post: PostResponse = await getPostBySlug(slug);

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
            <UpdateServiceForm post={post}/>
        </div>
    )

}