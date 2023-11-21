import { parseEditorJsToHtml } from "../editor";
import { ProductProps, VercelCommerceProduct } from "../types";
import { discountFormat, priceFormat } from "./priceFormat";

export const productModel = (item: VercelCommerceProduct): ProductProps => {
    return {
        id: item.id,
        slug: item.slug,
        name: item.name,
        description: item.description
            ? parseEditorJsToHtml(item.description)
            : "",
        price: priceFormat(item.pricing),
        discount: discountFormat(item.pricing),
        thumbnail: item.thumbnail?.url || "",
        media: item.media || [],
    };
};
