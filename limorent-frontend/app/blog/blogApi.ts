"use server"

import {PostResponse} from "@/app/dashboard/services/services.types";
import matter from "gray-matter";
import {getBlogPosts} from "@/app/dashboard/blog/actions";

export type Blog = {
    previewImage: string;
    post: PostResponse
}

export async function getAllBlogPosts(){
    const posts: PostResponse[] = await getBlogPosts();
    return posts.map((post) => {
        const {data, content} = matter(post.content || "");
        // @ts-ignore
        return {...data, post: post, content} as Service;
    });
}