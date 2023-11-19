import React, { Suspense } from "react";
import Link from "next/link";
import Grid from "@/components/Grid";
import ProductItem from "@/components/Layout/Product/ProductItem";
import { ROUTER } from "@/configs/router";
import { TEXT } from "@/constants/text";
import { getCategories } from "@/lib/saleor/graphql/fetch/getCategories";
import { getProducts } from "@/lib/saleor/graphql/fetch/getProducts";

export default async function ProductPage() {
    const products = await getProducts();
    const categories = (await getCategories()).filter(item => item.level === 0);

    return (
        <article className="container">
            <h3 className="title">{TEXT.PRODUCT}</h3>
            <div>{TEXT.SLOGAN}</div>
            <Suspense>
                <div className="flex flex-wrap mt-6">
                    <div className="basis-2/12">
                        <h3 className="mb-2 text-xs text-gray">Categories</h3>
                        {categories.map(categoriesItem => (
                            <Link
                                key={categoriesItem.id}
                                className="block py-1 text-sm hover:underline"
                                href={`${ROUTER.PRODUCT}/${categoriesItem.slug}`}
                            >
                                {categoriesItem.name}
                            </Link>
                        ))}
                    </div>
                    <div className="basis-10/12">
                        <Grid className="grid-cols-2 sm:grid-cols-3">
                            {products.map(productItem => (
                                <ProductItem
                                    key={productItem.id}
                                    data={productItem}
                                />
                            ))}
                        </Grid>
                    </div>
                </div>
            </Suspense>
        </article>
    );
}
