"use server"

import {PostRequest} from "@/app/dashboard/services/services.types";
import {revalidateTag} from "next/cache";

const BASE_URL: string = process.env.API_URL!;

export async function getBlogPosts(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/post?category=blog`, {
            method: "GET",
            next: {
                tags: ["blog"]
            },
            cache: "force-cache"
        });
        
        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicles from API: ${error}`);
        throw error;
    }
}


export async function getPostBySlug(slug: string): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/post/${slug}`, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicle by id from API: ${error}`);
        console.error(`ID: ${slug}`)
        throw error;
    }
}

export async function updateBlogPostById(id: number, body: PostRequest): Promise<any> {
    try {
        revalidateTag("blog")
        const response = await fetch(`${BASE_URL}/api/post/${id}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        });

        return await response.json();
    } catch (error) {
        console.error(`Error updating service post by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function addBlogPost(body: PostRequest): Promise<any> {
    try {
        revalidateTag("blog")
        const response = await fetch(`${BASE_URL}/api/post`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        });

        return await response.json();
    } catch (error) {
        console.error(`Error updating service post by id from API: ${error}`);
        throw error;
    }
}

export async function deletePostById(id: number): Promise<any> {
    try {
        await fetch(`${BASE_URL}/api/post/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error(`Error deleting post by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}
