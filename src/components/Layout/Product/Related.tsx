"use client";
import React from "react";
import ProductItem from "./ProductItem";
import { TEXT } from "@/constants/text";
import { ProductProps } from "@/lib/saleor/types";
import Grid from "@/components/Grid";

export default function Related({
    relatedData,
}: {
    relatedData: ProductProps["related"];
}) {
    return (
        <div className="mt-10">
            <p className="title">{TEXT.RELATED_PRODUCT}</p>
            <Grid className="grid-product">
                {relatedData.map(item => (
                    <ProductItem key={item.id} data={item as ProductProps} />
                ))}
            </Grid>
        </div>
    );
}
