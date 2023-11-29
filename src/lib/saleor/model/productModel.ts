import { parseEditorJsToHtml } from "../editor";
import { VariantFragment } from "../generated/graphql";
import { ProductProps, VercelCommerceProduct } from "../types";
import { discountFormat, priceFormat } from "./priceFormat";
import { isEmpty } from "lodash";

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
        variants: variantModel(item?.variants) as ProductProps["variants"],
        // Related products
        related:
            item?.category?.products?.edges?.map(relatedItem => ({
                id: relatedItem.node.id,
                slug: relatedItem.node?.slug,
                name: relatedItem.node?.name,
                price: priceFormat(relatedItem.node?.pricing),
                thumbnail: item.thumbnail?.url || "",
            })) || [],
    };
};

const variantModel = (
    variants: VariantFragment[] | null | undefined,
): ProductProps["variants"] | undefined => {
    return variants?.flatMap(variant => {
        if (!isEmpty(variant?.attributes)) {
            return variant?.attributes.flatMap(attributes => {
                return {
                    id: attributes.attribute.slug || "",
                    name: attributes.attribute.name as string,
                    values:
                        attributes.attribute.choices?.edges.map(
                            choice => choice.node.name || "",
                        ) || [],

                    availableValues: variants?.map(variant => ({
                        id: variant.id,
                        name: variant.name,
                        pricing: variant.pricing?.price?.gross,
                    })),
                };
            });
        }
        return {
            id: variant.id,
            name: variant.name,
            values: [],
            availableValues: [],
            pricing: variant.pricing?.price?.gross,
        };
    })[0];
    // .filter(
    //     (value1, idx, arr) =>
    //         // filter unique
    //         arr.findIndex(value2 => value1.id === value2.id) === idx,
    // ) || []
};
