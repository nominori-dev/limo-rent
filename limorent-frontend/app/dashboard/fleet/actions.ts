"use server"

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