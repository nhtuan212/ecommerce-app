"use client";
import React from "react";
import Link from "next/link";
import ImageComponent from "../Image";
import Price from "../Price";
import CartQuantity from "./CartQuantity";
import { ProductCheckoutProps } from "@/lib/saleor/types";

export default function CartItem({ data }: { data: ProductCheckoutProps }) {
    //** Variables */
    const { name, slug, thumbnail, price, quantity, attributeName, attribute } =
        data;

    return (
        <div className="py-2 border-b">
            <div className="flex justify-between items-center">
                <Link className="flex items-center" href={`/${slug}`}>
                    <div className="w-16 h-16">
                        <ImageComponent
                            className="img:object-cover"
                            src={thumbnail}
                            alt={name}
                            isInteractive
                        />
                    </div>
                    <div>
                        <h3 className="text-base">{name}</h3>
                        {attributeName && attribute && (
                            <p className="text-sm">
                                <span className="text-gray">
                                    {attributeName}:
                                </span>{" "}
                                {attribute}
                            </p>
                        )}
                    </div>
                </Link>

                <div>
                    <Price className="justify-end mb-2 text-sm" price={price} />
                    <CartQuantity quantity={quantity} />
                </div>
            </div>
        </div>
    );
}
