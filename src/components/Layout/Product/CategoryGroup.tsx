"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

//** Configs */
import { PAGE } from "@/configs/router";

//** Lodash */
import { isEmpty } from "lodash";

//** Fetch Api */
import fetchApi from "@/lib/fetchApi";

//** Interfaces */

export default function CategoryGroup() {
    //** States */
    const [categoryData, setCategoryData] = useState<[]>([]);

    //** Hooks */
    useEffect(() => {
        fetchApi("https://dummyjson.com/products/categories").then(res =>
            setCategoryData(res),
        );
    }, []);

    return (
        <section className="py-4 -mx-1">
            {!isEmpty(categoryData) && (
                <div className="flex flex-wrap">
                    {categoryData.map(item => (
                        <Link
                            className="bg-primary m-1 py-2 px-3 text-white"
                            key={item}
                            href={`${PAGE.PRODUCT}/${item}`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
