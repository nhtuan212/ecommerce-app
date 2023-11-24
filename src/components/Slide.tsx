"use client";
import React from "react";
import SwiperComponent, { SwiperType } from "./Swiper";
import { slideApi } from "@/apis/slide";

export default function Slide() {
    return <SwiperComponent data={slideApi} type={SwiperType.SLIDE} />;
}
