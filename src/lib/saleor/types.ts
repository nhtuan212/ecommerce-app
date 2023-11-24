import {
    GetCategoriesQuery,
    GetCollectionBySlugQuery,
    GetProductBySlugQuery,
} from "./generated/graphql";

export type VercelCommerceProduct = Exclude<
    GetProductBySlugQuery["product"],
    null | undefined
>;

export type VercelCommerceCategory = Exclude<
    Exclude<
        Exclude<GetCategoriesQuery["categories"], null | undefined>["edges"][0],
        null | undefined
    >["node"],
    null | undefined
>;

export type VercelCommerceCollection = Exclude<
    GetCollectionBySlugQuery["collection"],
    null | undefined
>;

//** Type output */

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
    VercelCommerceProduct,
    "pricing" | "thumbnail" | "variants" | "category"
> & {
    price: {
        amount: number;
        prevAmount?: number;
        currency: string;
    };
    discount: {
        amount: number;
        percent: string;
    };
    thumbnail: string;
    variants?: {
        name: string;
        values: string[];
        availableValues: {
            name: string;
            pricing?: ProductProps["price"];
        }[];
    };
    // Related products
    related: {
        id: string;
        slug?: string;
        name?: string;
        price?: PricingProduct;
        thumbnail: string;
    }[];
};

export type CategoryProps = Omit<VercelCommerceCategory, "products"> & {
    products?: ProductProps[];
};

export type CollectionProps = Omit<VercelCommerceCollection, "products"> & {
    products?: ProductProps[];
};
