"use server"

import {PostRequest} from "@/app/(cms)/dashboard/services/services.types";
import {revalidateTag} from "next/cache";

const BASE_URL: string = process.env.API_URL!;

export async function getServicesPosts(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/post?category=services`, {
            method: "GET",
            next: {
                tags: ["services"]
            },
            cache: "force-cache"
        });
        
        return await response.json();
    } catch (error) {
        console.error(`Error fetching service posts from API: ${error}`);
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
        console.error(`Error fetching service by slug from API: ${error}`);
        console.error(`ID: ${slug}`)
        throw error;
    }
}

export async function updateServiceById(id: number, body: PostRequest): Promise<any> {
    try {
        revalidateTag("services")
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

export async function addService(body: PostRequest): Promise<any> {
    try {
        revalidateTag("services")
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
