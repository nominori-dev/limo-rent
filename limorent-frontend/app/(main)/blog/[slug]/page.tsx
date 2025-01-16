import * as React from "react";
import {Tabs, TabsContent} from "@/app/(main)/components/ui/tabs";
import {getPostBySlug} from "@/app/(cms)/dashboard/services/actions";
import {PostResponse} from "@/app/(cms)/dashboard/services/services.types";
import markdownToHtml from "@/app/(main)/components/mdx/lib/mdxToHtml";
import Link from "next/link";
import {Button} from "@/app/(main)/components/ui/button";

export default async function ServicePage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const post: PostResponse = await getPostBySlug(slug);
    const content = await markdownToHtml(post.content || "");

    return (
        <div className={"pt-10"}>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <Link href={"/public"}><Button className={"tracking-tight"}>Wróć na głowną</Button></Link>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <h1 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                            {post.title}
                        </h1>
                        <div>
                            {content}
                        </div>
                        <h2>Data dodania: {post.createdAt}</h2>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )

}