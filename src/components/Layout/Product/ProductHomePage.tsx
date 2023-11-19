"use client";
import React from "react";
import Link from "next/link";
import Grid from "@/components/Grid";
import LoadMore from "@/components/LoadMore";
import ProductItem from "./ProductItem";
import { TEXT } from "@/constants/text";
import { ProductProps, CategoryProps } from "@/lib/saleor/types";

//** Interface */
interface ProductApiProps {
    indexCategories: CategoryProps[];
}

export default function ProductHomePage({ indexCategories }: ProductApiProps) {
    //** Variables */
    const limitProduct: number = 8;

    return (
        <section className="container">
            {indexCategories.map(categoryItem => (
                <div className="mb-2" key={categoryItem.id}>
                    <Link className="text-2xl" href={categoryItem.slug}>
                        {categoryItem?.name}
                    </Link>

                    <Grid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        {categoryItem.products
                            .slice(0, limitProduct)
                            .map((productItem: ProductProps) => (
                                <ProductItem
                                    key={productItem.id}
                                    data={productItem}
                                />
                            ))}
                    </Grid>

                    {categoryItem.products.length > limitProduct && (
                        <LoadMore
                            text={`${TEXT.LOAD_MORE} (${
                                categoryItem.products.length - limitProduct
                            }) ${TEXT.PRODUCT}`}
                            url={categoryItem.slug}
                        />
                    )}
                </div>
            ))}
        </section>
    );
}
