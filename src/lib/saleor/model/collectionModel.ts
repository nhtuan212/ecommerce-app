import { CollectionProps, VercelCommerceCollection } from "../types";

export const collectionModel = (
    item: VercelCommerceCollection,
): CollectionProps => {
    return {
        id: item.id,
        slug: item.slug,
        name: item.name,
    };
};
