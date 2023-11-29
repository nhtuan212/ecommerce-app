import { GetProductBySlugDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { TAGS } from "@/lib/saleor/constants";
import { ProductProps } from "@/lib/saleor/types";
import { productModel } from "../../model/productModel";
import { TEXT } from "@/constants/text";

export async function getProductBySlug({
    slug,
}: {
    slug?: string;
}): Promise<ProductProps> {
    const saleorProductBySlug = await saleorFetch({
        query: GetProductBySlugDocument,
        variables: {
            slug: slug || "",
        },
        tags: [TAGS.categories],
    });

    if (!saleorProductBySlug?.product) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return productModel(saleorProductBySlug?.product);
}
