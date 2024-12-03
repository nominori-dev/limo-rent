import {Button} from "@/app/components/ui/button";
import * as React from "react";
import {Tabs, TabsContent} from "@/app/components/ui/tabs";
import Link from "next/link";
import {getPostBySlug} from "@/app/dashboard/services/actions";
import {PostResponse} from "@/app/dashboard/services/services.types";
import markdownToHtml from "@/app/components/mdx/lib/mdxToHtml";

export default async function LandingServicePage({
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
                    <Link href={"/"}><Button className={"tracking-tight"}>Wróć na głowną</Button></Link>
                    <div className="flex items-center space-x-2">
                        <Button>Drukuj ofertę</Button>
                    </div>
                </div>
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