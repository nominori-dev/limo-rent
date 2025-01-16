import * as React from "react";
import {Blog, getAllBlogPosts} from "@/app/(main)/blog/blogApi";
import BlogPostCard from "@/app/(main)/blog/components/BlogCard";

interface ServiceSectionOptions {
    onlyRecent: boolean
}

export default async function BlogSection({onlyRecent} : ServiceSectionOptions){
    const posts: Blog[] = await getAllBlogPosts();
    if(onlyRecent){
        posts.splice(4);
    }

    return (
        <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8'}>
            {posts.map((post, index) => (
                <BlogPostCard key={index} slug={post.post.slug} description={post.post.metaDescription}
                title={post.post.title}/>
            ))}
        </div>
    )
}