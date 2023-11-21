import {
    CollectionProps,
    VercelCommerceCollection,
    VercelCommerceProduct,
} from "../types";
import { productModel } from "./productModel";

export const collectionBySlugModel = (
    item: VercelCommerceCollection,
): CollectionProps => {
    return {
        id: item.id,
        slug: item.slug,
        name: item.name,
        products: item?.products?.edges?.map(
            (item: { node: VercelCommerceProduct }) =>
                productModel(item.node) || {},
        ),
    };
};
