import { CheckoutProps, VercelCommerceCheckout } from "../types";
import { priceFormat } from "./priceFormat";

export const checkoutModel = (item: VercelCommerceCheckout): CheckoutProps => {
    return {
        id: item.id,
        token: item.token,
        totalQuantity: item.quantity,
        totalPrice: {
            amount: item.totalPrice.gross.amount,
            currency: item.totalPrice.gross.currency,
        },
        products: item.lines.map(lineItem => {
            return {
                id: lineItem.variant.id,
                lineId: lineItem.id,
                quantity: lineItem.quantity,
                name: lineItem.variant.product.name,
                slug: lineItem.variant.product.slug,
                price: priceFormat(
                    lineItem.variant.product.pricing?.priceRange?.start,
                ),
                thumbnail: lineItem.variant.product.thumbnail?.url,

                // Product attributes
                attributeName: lineItem.variant.attributes[0]?.attribute.name,
                attribute: lineItem.variant.name,
            };
        }),
    };
};
