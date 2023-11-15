import { PricingProduct } from "../types";

export const priceFormat = (price: PricingProduct) => {
    return {
        amount: price?.priceRange?.start?.gross.amount || 0,
        prevAmount:
            price?.priceRange?.start?.gross.amount +
                price?.discount?.gross.amount || 0,
        currency: price?.priceRange?.start?.gross.currency || "",
    };
};

export const discountFormat = (price: PricingProduct) => {
    const amount = price?.priceRange?.start?.gross.amount;
    const discount = price?.discount?.gross.amount;
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
