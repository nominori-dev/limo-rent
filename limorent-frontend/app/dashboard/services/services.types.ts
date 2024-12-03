export interface PostRequest {
    title: string;
    content?: string;
    category: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
}

export interface PostResponse {
    id: number;
    title: string;
    category: string;
    content?: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    createdAt: string; // ISO date format
}