"use client";
import React from "react";
import Link from "next/link";

//** Components */
import ImageComponent from "@/components/Image";
import Price from "@/components/Price";
import Grid from "@/components/Grid";

//** Types */
import { Product } from "@/lib/types";

//** Interfaces */
interface ProductApiProps {
    products: Product[];
}

export default function Product({ products }: ProductApiProps) {
    return (
        <section className="container">
            <h3 className="title">Hot Products</h3>

            <Grid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {products.map(item => (
                    <Grid.Item className="p-2 text-center" key={item.id}>
                        <Link
                            className="relative inline-block h-full w-full"
                            href={item.slug}
                        >
                            <ImageComponent
                                src={item?.thumbnail}
                                alt={item?.name}
                                isInteractive
                            />
                            <div className="mt-4">
                                <p>{item?.name}</p>
                                <Price price={item?.price} />
                            </div>
                        </Link>
                    </Grid.Item>
                ))}
            </Grid>
        </section>
    );
}
