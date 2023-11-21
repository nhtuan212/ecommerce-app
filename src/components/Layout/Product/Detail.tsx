"use client";
import React from "react";
import Link from "next/link";
import Prose from "@/components/Prose";
import Price from "@/components/Price";
import ImageComponent from "@/components/Image";
import Variant from "./Variant";
import { ProductProps } from "@/lib/saleor/types";
import { isEmpty } from "lodash";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Detail({ data }: { data: ProductProps }) {
    const { name, description, price, media, variants } = data;

    return (
        <article className="container">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-3/5 md:w-1/2 px-0 sm:px-2">
                    {!isEmpty(media) && (
                        <Swiper
                            className="mySwiper"
                            navigation={true}
                            modules={[Navigation]}
                        >
                            {media?.map(mediaItem => (
                                <SwiperSlide key={mediaItem.url}>
                                    <Link
                                        key={mediaItem.url}
                                        className="inline-block w-full h-[300px] sm:h-[500px] rounded-md"
                                        href={""}
                                        scroll={false}
                                    >
                                        <ImageComponent
                                            className="img:object-cover"
                                            src={mediaItem.url}
                                            alt={name}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                <div className="w-full sm:w-2/5 md:w-1/2 px-0 sm:px-2">
                    <h1>{name}</h1>
                    <Price
                        className="justify-start py-3 text-2xl"
                        price={price}
                    />
                    <div className="py-3">
                        <Variant variants={variants} />
                    </div>
                    <div className="py-3">
                        <Prose html={description} />
                    </div>
                </div>
            </div>
        </article>
    );
}
