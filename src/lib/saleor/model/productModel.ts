import { parseEditorJsToHtml } from "../editor";
import { GetProductBySlugQuery, VariantFragment } from "../generated/graphql";
import { ProductProps } from "../types";
import { discountFormat, priceFormat } from "./priceFormat";

export const productModel = (
    item: Exclude<GetProductBySlugQuery["product"], null | undefined>,
): ProductProps => {
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
        variants: variantModel(item?.variants),
    };
};

const variantModel = (variants: VariantFragment[] | null | undefined) => {
    return (
        variants
            ?.flatMap(
                variant =>
                    variant?.attributes.flatMap(attributes => {
                        return {
                            name: attributes.attribute.name,
                            values:
                                attributes.attribute.choices?.edges.map(
                                    choice => choice.node.name || "",
                                ) || [],
                        };
                    }),
            )
            .filter(
                (value1, idx, arr) =>
                    // filter unique
                    arr.findIndex(value2 => value1.name === value2.name) ===
                    idx,
            ) || []
    );
};
