"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { ROUTER } from "@/configs/router";
import { CategoryProps } from "@/lib/saleor/types";

export default function Categories({ data }: { data: CategoryProps[] }) {
    const params = useParams();

    return (
        <>
            <h3 className="mb-2 text-xs text-gray">Categories</h3>
            {data.map((categoriesItem: CategoryProps) => (
                <Link
                    key={categoriesItem.id}
                    className={clsx(
                        "block py-1 text-sm hover:underline",
                        //** Active slug */
                        params?.slug === categoriesItem.slug && "underline",
                    )}
                    href={`${ROUTER.PRODUCT}/${categoriesItem.slug}`}
                >
                    {categoriesItem.name}
                </Link>
            ))}
        </>
    );
}
