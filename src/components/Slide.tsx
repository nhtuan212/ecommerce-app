"use client";
import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/Image";
import { ROUTER } from "@/configs/router";
import { slideApi } from "@/apis/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slide() {
    return (
        <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
            {slideApi.map(item => (
                <SwiperSlide key={item.id}>
                    <Link
                        className="inline-block w-full h-[250px] sm:h-[350px] md:h-[450px]"
                        href={ROUTER.HOME_PAGE}
                    >
                        <ImageComponent
                            className="img:object-cover"
                            src={item?.url}
                            alt={item?.alt}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
