import React from "react";
import Link from "next/link";
import Grid from "@/components/Grid";
import ImageComponent from "@/components/Image";
import Price from "@/components/Price";
import { ProductProps } from "@/lib/saleor/types";

//** Interface */
interface ProductItemProps {
    data: ProductProps;
}

export default function ProductItem({ data }: ProductItemProps) {
    const { slug, thumbnail, name, price } = data;

    return (
        <Grid.Item className="text-center">
            <Link
                className="relative inline-block h-full w-full"
                href={`/${slug}`}
            >
                <ImageComponent
                    className="border border-primary-100 rounded-md"
                    src={thumbnail}
                    alt={name}
                    isInteractive
                />
                <div className="mt-4">
                    <h3>{name}</h3>
                    <Price price={price} />
                </div>
            </Link>
        </Grid.Item>
    );
}
