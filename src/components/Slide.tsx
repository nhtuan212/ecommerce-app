"use client";
import React from "react";
import Link from "next/link";

//** Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//** Components */
import ImageComponent from "@/components/Image";

//** Constants */
import { PAGE } from "@/configs/router";

//** Apis */
import { slideApi } from "@/apis/slide";

export default function Slide() {
    return (
        <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
            {slideApi.map(item => (
                <SwiperSlide key={item.id}>
                    <Link
                        className="inline-block w-full h-[250px] sm:h-[350px] md:h-[450px]"
                        href={PAGE.HOME_PAGE}
                    >
                        <ImageComponent
                            className="object-cover"
                            src={item?.url}
                            alt={item?.alt}
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
