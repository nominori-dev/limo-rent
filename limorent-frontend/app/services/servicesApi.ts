"use server"

import {PostResponse} from "@/app/dashboard/services/services.types";
import {getServicesPosts} from "@/app/dashboard/services/actions";
import matter from "gray-matter";

export type Service = {
    previewImage: string;
    post: PostResponse
}

export async function getAllServices(){
    const services: PostResponse[] = await getServicesPosts();
    return services.map((service) => {
        const {data, content} = matter(service.content || "");
        // @ts-ignore
        return {...data, post: service, content} as Service;
    });
}