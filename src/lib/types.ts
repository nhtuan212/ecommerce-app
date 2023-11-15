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

export type Product = Omit<VercelCommerceProduct, "pricing" | "thumbnail"> & {
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
