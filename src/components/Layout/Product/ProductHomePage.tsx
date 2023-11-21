"use client";
import React from "react";
import Grid from "@/components/Grid";
import LoadMore from "@/components/LoadMore";
import ProductItem from "./ProductItem";
import { TEXT } from "@/constants/text";
import { ROUTER } from "@/configs/router";
import { ProductProps, CategoryProps } from "@/lib/saleor/types";

//** Interface */
interface ProductApiProps {
    categories: CategoryProps[];
}

export default function ProductHomePage({ categories }: ProductApiProps) {
    //** Variables */
    const limitProduct: number = 8;

    return (
        <section className="container">
            {categories.map(categoryItem => (
                <div className="py-2" key={categoryItem.id}>
                    <h3 className="block mb-2 font-bold text-center text-2xl">
                        {categoryItem?.name}
                    </h3>

                    <Grid className="grid-product">
                        {Array.isArray(categoryItem.products) &&
                            categoryItem.products
                                .slice(0, limitProduct)
                                .map((productItem: ProductProps) => (
                                    <ProductItem
                                        key={productItem.id}
                                        data={productItem}
                                    />
                                ))}
                    </Grid>

                    {Array.isArray(categoryItem.products) &&
                        categoryItem.products.length > limitProduct && (
                            <LoadMore
                                text={TEXT.SEE_ALL}
                                url={`${ROUTER.PRODUCT}/${categoryItem.slug}`}
                            />
                        )}
                </div>
            ))}
        </section>
    );
}
