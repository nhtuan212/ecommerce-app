export type VercelCommerceProduct = {
    id: string;
    slug: string;
    name: string;
    description?: string | null;
    pricing?: PricingProduct | null;
    thumbnail?: {
        url: string;
    } | null;
    media?: Array<{
        url: string;
    }> | null;
};

export type VercelCommerceCategory = {
    id: string;
    level?: number;
    slug?: string;
    name?: string;
    description?: string | null;
    products?: {
        edges: Array<{
            node: VercelCommerceProduct;
        }>;
    } | null;
};

export type VercelCommerceCollection = {
    id: string;
    slug: string;
    name?: string;
    products?: {
        edges: Array<{
            node: VercelCommerceProduct;
        }>;
    } | null;
};

export type PricingProduct = {
    priceRange?: {
        start?: {
            gross: { amount: number; currency: string };
        } | null;
        stop?: {
            gross: { amount: number; currency: string };
        } | null;
    } | null;

    discount?: {
        gross: { amount: number; currency: string };
    } | null;
};

export type ProductProps = Omit<
    VercelCommerceProduct,
    "pricing" | "thumbnail"
> & {
    price: {
        amount: number;
        prevAmount: number;
        currency: string;
    };
    discount: {
        amount: number;
        percent: string;
    };
    thumbnail: string;
};

export type CategoryProps = Omit<VercelCommerceCategory, "products"> & {
    products?: ProductProps[];
};

export type CollectionProps = Omit<VercelCommerceCollection, "products"> & {
    products?: ProductProps[];
};
