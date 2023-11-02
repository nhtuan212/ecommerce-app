"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//** Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SlideComponent() {
    return (
        <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
            <Link href="#">
                <SwiperSlide>
                    <Image
                        src="https://placehold.jp/1920x500.png"
                        width={1920}
                        height={500}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://placehold.jp/1920x500.png"
                        width={1920}
                        height={500}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
            </Link>
        </Swiper>
    );
}
