"use client";
import React, { useEffect, useState } from "react";

//** Components */
import ImageComponent from "@/components/Image";

//** Configs */
import { PAGE } from "@/configs/router";

//** Lodash */
import { isEmpty } from "lodash";

//** Apis */
import fetchApi from "@/helpers/fetchApi";

//** Interfaces */
interface ProductItemProps {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
}
interface ProductApiProps {
    products: ProductItemProps[];
}

export default function HotProduct() {
    const [data, setData] = useState<ProductApiProps>();

    useEffect(() => {
        fetchApi("https://dummyjson.com/products").then(res => setData(res));
    }, []);

    return (
        <section className="container">
            <h3 className="title">Hot Products</h3>

            {!isEmpty(data?.products) && (
                <div className="flex flex-wrap -mx-2">
                    {data?.products.map((item: ProductItemProps) => (
                        <div
                            className="md:basis-1/4 sm:basis-1/3 basis-1/2 px-2 py-4 text-center"
                            key={item.id}
                        >
                            <div className="flex items-center">
                                <ImageComponent
                                    src={item?.thumbnail}
                                    width={350}
                                    height={250}
                                    link={PAGE.EXAMPLE}
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
