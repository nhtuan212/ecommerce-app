import { parseEditorJsToHtml } from "../editor";
import { VariantFragment } from "../generated/graphql";
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
