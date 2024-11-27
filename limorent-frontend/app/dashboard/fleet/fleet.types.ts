// Vehicle API Interfaces
export interface VehicleRequest {
    vehicleName: string;
    vehicleClass: "BUSINESS" | "LUXURY" | "LUXURY_SUV" | "LUXURY_MPV" | "LUXURY_COACH";
    vehicleDescription?: string;
    vehicleLuggage?: number;
    vehiclePassenger?: number;
}

export interface VehicleResponse {
    id: number;
    vehicleName: string;
    vehicleClass: "BUSINESS" | "LUXURY" | "LUXURY_SUV" | "LUXURY_MPV" | "LUXURY_COACH";
    vehicleDescription?: string;
    vehicleLuggage?: number;
    vehiclePassenger?: number;
}

export interface VehiclePriceRequest {
    vehicleId: number;
    priceTitle: string;
    price: number;
}

export interface VehiclePriceResponse {
    id: number;
    vehicle: VehicleResponse;
    priceTitle: string;
    price: number;
}

export interface VehicleImageRequest {
    vehicleId: number;
    imageType: "MAIN" | "GALLERY";
    imageUrl: string;
    imageAlt?: string;
}

export interface VehicleImageResponse {
    id: number;
    vehicle: VehicleResponse;
    imageType: "MAIN" | "GALLERY";
    imageUrl: string;
    imageAlt?: string;
}