// Customer API Interfaces
import {VehicleResponse} from "@/app/dashboard/fleet/fleet.types";

export interface OfferRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    specialRequests?: string;
    vehicleId: number;
}

export interface CustomerResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    specialRequests: string | null;
    selectedVehicle: VehicleResponse;
    generatedOffer: string | null;
}