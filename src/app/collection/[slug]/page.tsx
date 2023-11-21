import React, { Suspense } from "react";
import Grid from "@/components/Grid";
import ProductItem from "@/components/Layout/Product/ProductItem";
import { getCollectionBySlug } from "@/lib/saleor/graphql/fetch/getCollectionBySlug";

export default async function CollectionSlugPage({
    params,
}: {
    params: { slug: string };
}) {
    const collection = await getCollectionBySlug({ slug: params.slug });

    return (
        <article className="container">
            <h3 className="title">{collection.name}</h3>
            <Suspense>
                <Grid className="grid-product">
                    {collection?.products?.map(productItem => (
                        <ProductItem key={productItem.id} data={productItem} />
                    ))}
                </Grid>
            </Suspense>
        </article>
    );
}
