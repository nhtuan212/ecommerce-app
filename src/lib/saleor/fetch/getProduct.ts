import { GetProductsDocument } from "../generated/graphql";
import { saleorFetch } from ".";

//** Model */
import { productModel } from "@/lib/saleor/model/productModel";

//** Constants */
import { TAGS } from "@/lib/saleor/constants";

//** Types */
import { Product, VercelCommerceProduct } from "@/lib/saleor/types";

export async function getProduct(): Promise<Product[]> {
    const saleorProduct = await saleorFetch({
        query: GetProductsDocument,
        tags: [TAGS.products],
    });

    if (!saleorProduct.products) {
        throw new Error("Product not found");
    }

    return (
        saleorProduct.products?.edges.map(product =>
            productModel(product.node as VercelCommerceProduct),
        ) || []
    );
}
