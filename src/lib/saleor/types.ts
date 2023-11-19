export type VercelCommerceProduct = {
    id: string;
    slug: string;
    name: string;
    description?: string | null;
    thumbnail?: {
        url: string;
    } | null;
    pricing: PricingProduct;
};

export type VercelCommerceCategory = {
    id: string;
    level: number;
    slug: string;
    name: string;
    description?: string | null;
    products: {
        edges: [{ node: VercelCommerceProduct }];
    };
};

export type CategoryProps = Omit<VercelCommerceCategory, "products"> & {
    products: ProductProps[];
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
    thumbnail: string;
    discount: {
        amount: number;
        percent: string;
    };
};

export type PricingProduct = {
    priceRange: {
        start: {
            gross: {
                amount: number;
                currency: string;
            };
        };
        stop: {
            gross: {
                amount: number;
                currency: string;
            };
        };
    };

    discount: {
        gross: {
            amount: number;
            currency: string;
        };
    };
};
