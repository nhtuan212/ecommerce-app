import { parseEditorJsToHtml } from "../editor";
import {
    CategoryProps,
    VercelCommerceCategory,
    VercelCommerceProduct,
} from "../types";
import { productModel } from "./productModel";

export const productByCategoryModel = (
    item: VercelCommerceCategory,
): CategoryProps => {
    return {
        id: item.id,
        slug: item.slug,
        name: item.name,
        level: item.level,
        description: item?.description
            ? parseEditorJsToHtml(item.description)
            : "",
        products: item?.products?.edges?.map(
            (item: { node: VercelCommerceProduct }) =>
                productModel(item.node) || {},
        ),
    };
};
