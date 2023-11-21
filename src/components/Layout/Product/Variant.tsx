"use client";
import React from "react";
import { ProductProps } from "@/lib/saleor/types";
import Link from "next/link";

export default function Variant({
    variants,
}: {
    variants: ProductProps["variants"];
}) {
    return variants?.map(variant => (
        <section key={variant.name}>
            <p className="mb-2">{variant.name}</p>

            <div className="flex flex-wrap gap-2">
                {variant?.values?.map(value => (
                    <Link
                        key={value}
                        href={""}
                        className="flex justify-center items-center min-w-[4rem] bg-gray-200 px-2 py-1 border border-transparent rounded-full hover:border-primary"
                    >
                        {value}
                    </Link>
                ))}
            </div>
        </section>
    ));
}
