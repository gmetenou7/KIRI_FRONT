export interface StockArticleModelInterface {
    name: string;
    price: string;
    created_at: string;
    updated_at: string;
    created_by: string;
    category: string;
    tags: string[];
    favorite: boolean;
    provider: string;
    image_url: string;
    code: string;
}