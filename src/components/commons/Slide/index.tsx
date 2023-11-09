"use client";
import React from "react";

//** Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//** Components */
import ImageComponent from "@commonComponents/Image";

//** Constants */
import { PAGE } from "@/configs/router";

//** Apis */
import { slideApi } from "@/apis/slide";

export default function SlideComponent() {
    return (
        <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
            {slideApi.map(item => (
                <SwiperSlide key={item.id}>
                    <ImageComponent
                        width={1920}
                        height={500}
                        src={item?.url}
                        alt={item?.alt}
                        link={PAGE.HOME_PAGE}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
