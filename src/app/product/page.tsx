import React, { Suspense } from "react";
import Grid from "@/components/Grid";
import ProductItem from "@/components/Layout/Product/ProductItem";
import { TEXT } from "@/constants/text";
import { getProducts } from "@/lib/saleor/graphql/fetch/getProducts";

export default async function ProductPage() {
    const products = await getProducts();

    return (
        <>
            <h3 className="title">{TEXT.PRODUCT}</h3>
            <div>{TEXT.SLOGAN}</div>
            <Suspense>
                <Grid className="grid-cols-2 sm:grid-cols-3">
                    {products.map(productItem => (
                        <ProductItem key={productItem.id} data={productItem} />
                    ))}
                </Grid>
            </Suspense>
        </>
    );
}
