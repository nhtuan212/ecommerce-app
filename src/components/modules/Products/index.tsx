"use client";
import React, { useEffect } from "react";
import fetchApi from "@/helpers/fetchApi";
import { isEmpty } from "lodash";
import ImageComponent from "@commonComponents/Image";
import { PAGE } from "@/constants/router";

export default function ProductModules() {
    const [data, setData] = React.useState<any>([]);

    useEffect(() => {
        fetchApi("https://dummyjson.com/products").then(res => setData(res));
    }, []);

    return (
        <section className="p-4">
            <h1 className="mb-4 text-center">Hot Products</h1>

            {!isEmpty(data) && (
                <div className="flex flex-wrap">
                    {data?.products.map(item => (
                        <div
                            className="basis-1/4 px-2 py-4 text-center"
                            key={item.id}
                        >
                            <div className="flex items-center h-[250px]">
                                <ImageComponent
                                    src={item?.thumbnail}
                                    width={250}
                                    height={200}
                                    slug={PAGE.EXAMPLE}
                                />
                            </div>
                            <div className="mt-4">
                                <p>{item?.title}</p>
                                <p>${item?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
