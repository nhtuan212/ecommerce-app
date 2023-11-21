import React, { Suspense } from "react";
import Grid from "@/components/Grid";
import ProductItem from "@/components/Layout/Product/ProductItem";
import Empty from "@/components/Empty";
import { TEXT } from "@/constants/text";
import { getProducts } from "@/lib/saleor/graphql/fetch/getProducts";
import { isEmpty } from "lodash";

export default async function ProductPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | undefined };
}) {
    const products = await getProducts({
        query: searchParams?.search,
    });

    return (
        <>
            <h3 className="title">{TEXT.PRODUCT}</h3>
            <div className="mb-4">{TEXT.SLOGAN}</div>
            {!isEmpty(products) ? (
                <Suspense>
                    <Grid className="grid-product">
                        {products.map(productItem => (
                            <ProductItem
                                key={productItem.id}
                                data={productItem}
                            />
                        ))}
                    </Grid>
                </Suspense>
            ) : (
                <Empty />
            )}
        </>
    );
}
