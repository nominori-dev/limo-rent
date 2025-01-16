import * as React from "react";
import {MainNav} from "@/app/(cms)/dashboard/components/main-nav";
import {Search} from "@/app/(cms)/dashboard/components/search";
import {UserNav} from "@/app/(cms)/dashboard/components/user-nav";
import {getPostBySlug} from "@/app/(cms)/dashboard/services/actions";
import {PostResponse} from "@/app/(cms)/dashboard/services/services.types";
import UpdateBlogPostForm from "@/app/(cms)/dashboard/blog/edit/[slug]/UpdateBlogPostForm";




export default async function EditBlogPage({
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
            <UpdateBlogPostForm post={post}/>
        </div>
    )

}