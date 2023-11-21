import { PricingProduct } from "../types";

export const priceFormat = (price?: PricingProduct | null) => {
    const amount = price?.priceRange?.start?.gross.amount || 0;
    const discount = price?.discount?.gross.amount || 0;
    const currency = price?.priceRange?.start?.gross.currency || "";

    return {
        amount,
        prevAmount: amount + discount,
        currency,
    };
};

export const discountFormat = (price?: PricingProduct | null) => {
    const amount = price?.priceRange?.start?.gross.amount || 0;
    const discount = price?.discount?.gross.amount || 0;
    const initPrice = amount + discount;

    let percent = "";

    if (discount) {
        percent = `${100 - (amount * 100) / initPrice}%`;
    }

    return {
        amount,
        percent,
    };
};
