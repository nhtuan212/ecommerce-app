"use client";
import React from "react";
import SwiperComponent from "@/components/Swiper";
import { TEXT } from "@/constants/text";
import { ProductProps } from "@/lib/saleor/types";

export default function Related({
    relatedData,
}: {
    relatedData: ProductProps["related"];
}) {
    return (
        <div className="mt-10">
            <p className="title">{TEXT.RELATED_PRODUCT}</p>
            <SwiperComponent data={relatedData} slidesPerView={[4, 3, 2]} />
        </div>
    );
}
