"use server"

import {OfferRequest} from "@/app/dashboard/customers/customer.types";
import {revalidateTag} from "next/cache";

const BASE_URL: string = process.env.API_URL!;

export async function getCustomers(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/customer`, {
            method: "GET",
            next: {
                tags: ["customers"]
            },
            cache: "force-cache"
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching customers from API: ${error}`);
        throw error;
    }
}

export async function getCustomerById(id: number): Promise<any> {
    try {
        revalidateTag("customers")
        const response = await fetch(`${BASE_URL}/api/customer/${id}`, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching customer by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function deleteCustomerById(id: number): Promise<any> {
    try {
        revalidateTag("customers")
        await fetch(`${BASE_URL}/api/customer/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error(`Error deleting customer by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}


export async function generateOffer(body: OfferRequest): Promise<any> {
    try {
        revalidateTag("customers");
        await fetch(`${BASE_URL}/api/customer/offer`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        });
    } catch (error) {
        console.error(`Error generating offer: ${error}`);
        throw error;
    }
}