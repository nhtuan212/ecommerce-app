"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouterCustomHook } from "@/lib/customHooks";
import { ProductProps } from "@/lib/saleor/types";

export default function Variant({
    variants,
}: {
    variants: ProductProps["variants"];
}) {
    //** Custom Hooks */
    const { searchParams, createQueryString } = useRouterCustomHook();

    return (
        <section>
            <p className="mb-2">{variants?.name}</p>

            <div className="flex flex-wrap gap-2">
                {variants?.values?.map(value => {
                    const isActive =
                        searchParams.get(variants.name.toLowerCase()) === value;

                    const isAvailableValues = variants?.availableValues
                        ?.map(value => value.name)
                        .includes(value);

                    return (
                        <Link
                            key={value}
                            href={
                                isAvailableValues
                                    ? createQueryString({
                                          key: variants.name.toLowerCase(),
                                          value,
                                      })
                                    : ""
                            }
                            className={clsx(
                                "flex justify-center items-center min-w-[3.5rem] bg-gray-100 px-2 py-1 border rounded-md",
                                isAvailableValues
                                    ? "hover:border-primary"
                                    : "relative text-gray z-10 cursor-not-allowed overflow-hidden before:absolute before:bg-gray before:inset-x-0 before:-z-10 before:h-px before:-rotate-[30deg] before:transition-transform",
                                isActive &&
                                    isAvailableValues &&
                                    "bg-primary text-white border-primary",
                            )}
                        >
                            {value}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
