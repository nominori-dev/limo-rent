"use server"

import {VehiclePriceRequest, VehicleRequest} from "@/app/dashboard/fleet/fleet.types";
import {revalidateTag} from "next/cache";

const BASE_URL: string = process.env.API_URL!;

export async function getVehicles(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/vehicle`, {
            method: "GET",
            next: {
                tags: ["vehicles"]
            },
            cache: "force-cache"
        });
        
        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicles from API: ${error}`);
        throw error;
    }
}

export async function getVehicleById(id: number): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/vehicle/${id}`, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicle by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function updateVehicleById(id: number, body: VehicleRequest): Promise<any> {
    try{
        revalidateTag("vehicles")
        const response = await fetch(`${BASE_URL}/api/vehicle/${id}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        });

        return await response.json();
    } catch (error) {
        console.error(`Error updating vehicle by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function updateVehiclePriceById(id: number, body: VehiclePriceRequest): Promise<any> {
    try{
        revalidateTag("vehicles")
        const response = await fetch(`${BASE_URL}/api/vehicle/price/${id}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        });

        return await response.json();
    } catch (error) {
        console.error(`Error updating price by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function updateVehicleImageById(id: number, body: VehiclePriceRequest): Promise<any> {
    try{
        revalidateTag("vehicles")
        const response = await fetch(`${BASE_URL}/api/vehicle/price/${id}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        });

        return await response.json();
    } catch (error) {
        console.error(`Error updating price by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function getImagesByVehicleId(id: number): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/vehicle/${id}/images`, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicle by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}

export async function getVehicleImages(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/vehicle/image`, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicle by id from API: ${error}`);
        throw error;
    }
}


export async function getPriceByVehicleId(id: number): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/vehicle/${id}/price`, {
            method: "GET",
        });

        return await response.json();
    } catch (error) {
        console.error(`Error fetching vehicle by id from API: ${error}`);
        console.error(`ID: ${id}`)
        throw error;
    }
}