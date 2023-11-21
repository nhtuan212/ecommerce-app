import { notFound } from "next/navigation";
import { GetProductsDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { productModel } from "@/lib/saleor/model/productModel";
import { TAGS } from "@/lib/saleor/constants";
import { ProductProps } from "@/lib/saleor/types";
import { TEXT } from "@/constants/text";

export async function getProducts(): Promise<ProductProps[]> {
    const saleorProduct = await saleorFetch({
        query: GetProductsDocument,
        tags: [TAGS.products],
    });

    if (!saleorProduct.products) {
        console.error(TEXT.EMPTY_FETCH);
        return notFound();
    }

    return (
        saleorProduct.products?.edges.map(item => productModel(item.node)) || []
    );
}
