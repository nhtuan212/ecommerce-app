import { GetProductsDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { productModel } from "@/lib/saleor/model/productModel";
import { TAGS } from "@/lib/saleor/constants";
import { ProductProps } from "@/lib/saleor/types";
import { TEXT } from "@/constants/text";

export async function getProducts({
    query,
}: {
    query?: string;
}): Promise<ProductProps[]> {
    const saleorProduct = await saleorFetch({
        query: GetProductsDocument,
        variables: {
            search: query || "",
        },
        tags: [TAGS.products],
    });

    if (!saleorProduct.products) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return (
        saleorProduct.products?.edges.map(item => productModel(item.node)) || []
    );
}
