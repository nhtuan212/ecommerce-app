import { productModel } from "./productModel";
import { parseEditorJsToHtml } from "../editor";
import {
    CategoryProps,
    VercelCommerceCategory,
    VercelCommerceProduct,
} from "../types";

export const categoryModel = (item: VercelCommerceCategory): CategoryProps => {
    return {
        id: item.id,
        level: item.level,
        slug: item.slug,
        name: item.name,
        description: item.description
            ? parseEditorJsToHtml(item.description)
            : "",
        products: item?.products?.edges?.map(
            (item: { node: VercelCommerceProduct }) =>
                productModel(item.node) || [],
        ),
    };
};
