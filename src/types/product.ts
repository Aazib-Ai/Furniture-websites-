export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    description: string;
    image: string;
    images?: string[];
    reviews: number;
    isNew?: boolean;
    inStock?: boolean;
}