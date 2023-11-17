import { parseEditorJsToHtml } from "../editor";
import { Product, VercelCommerceProduct } from "../types";
import { discountFormat, priceFormat } from "./priceFormat";

export const productModel = (item: VercelCommerceProduct): Product => {
    return {
        id: item.id,
        slug: item.slug,
        name: item.name,
        description: item.description
            ? parseEditorJsToHtml(item.description)
            : "",
        thumbnail: item.thumbnail?.url || "",
        price: priceFormat(item.pricing),
        discount: discountFormat(item.pricing),
    };
};
