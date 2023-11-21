import { GetProductBySlugQuery } from "./generated/graphql";

export type VercelCommerceProduct = Exclude<
    GetProductBySlugQuery["product"],
    null | undefined
>;

export type VercelCommerceProduct2 = {
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
    variants?: VariantProduct;
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

export type VariantProduct = {
    name?: string;
    attributes?: {
        attribute?: {
            name?: string;
            choices: {
                edges: {
                    node: {
                        name?: string;
                    };
                };
            };
        };
        values: {
            name?: string;
        };
    };
    pricing?: PricingProduct;
};

export type ProductProps = Omit<
    Exclude<GetProductBySlugQuery["product"], null | undefined>,
    "pricing" | "thumbnail" | "variants"
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
    variants?: {
        name?: string | null;
        values: string[];
    }[];
};

export type CategoryProps = Omit<VercelCommerceCategory, "products"> & {
    products?: ProductProps[];
};

export type CollectionProps = Omit<VercelCommerceCollection, "products"> & {
    products?: ProductProps[];
};
