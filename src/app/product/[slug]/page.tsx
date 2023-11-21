import React from "react";
import Grid from "@/components/Grid";
import ProductItem from "@/components/Layout/Product/ProductItem";
import Empty from "@/components/Empty";
import { getProductByCategory } from "@/lib/saleor/graphql/fetch/getProductByCategory";
import { isEmpty } from "lodash";

//** Interface */
interface CategorySlugPageProps {
    params: { slug: string };
}

export default async function CategorySlugPage({
    params,
}: CategorySlugPageProps) {
    const category = await getProductByCategory({ slug: params?.slug });

    return !isEmpty(category?.products) ? (
        <>
            <h1>{category.name}</h1>
            <Grid className="grid-product">
                {category?.products?.map(productItem => (
                    <ProductItem key={productItem.id} data={productItem} />
                ))}
            </Grid>
        </>
    ) : (
        <Empty />
    );
}
