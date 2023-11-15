import { GetProductsDocument, TypedDocumentString } from "./generated/graphql";
import { invariant } from "./utils";
import { TAGS } from "../constants";

//** Model */
import { productModel } from "../model/productModel";

//** Types */
import { Product, VercelCommerceProduct } from "../types";

type GraphQlError = {
    message: string;
};

type GraphQlErrorResponse<T> =
    | { data: T }
    | { errors: readonly GraphQlError[] };

const endpoint = process.env.SALEOR_INSTANCE_URL;

export async function saleorFetch<Result, Variables>({
    query,
    // variables,
    headers,
    cache,
    tags,
}: {
    query: TypedDocumentString<Result, Variables>;
    // variables: Variables;
    headers?: HeadersInit;
    cache?: RequestCache;
    tags?: NextFetchRequestConfig["tags"];
}): Promise<Result> {
    invariant(endpoint, "Missing SALEOR_INSTANCE_URL!");

    const options = cache
        ? { cache, next: { tags } }
        : { next: { revalidate: 900, tags } };

    const result = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify({
            query: query.toString(),
            // ...(variables && { variables }),
        }),
        ...options,
    });

    const body = (await result.json()) as GraphQlErrorResponse<Result>;
    if ("errors" in body) {
        throw body.errors[0];
    }

    return body.data;
}

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
