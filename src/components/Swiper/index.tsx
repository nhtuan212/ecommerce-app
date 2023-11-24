import React from "react";
import Link from "next/link";
import ProductItem from "../Layout/Product/ProductItem";
import ImageComponent from "../Image";
import { ProductProps } from "@/lib/saleor/types";
import { ROUTER } from "@/configs/router";
import { slideType } from "@/apis/slide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//** Interface */
export enum SwiperType {
    SLIDE = "slide",
    PRODUCT_DETAIL = "product_detail",
}

interface SwiperProps {
    data: any;
    slidesPerView?: number[];
    type?: SwiperType;
}

export default function SwiperComponent({
    data,
    slidesPerView,
    type,
}: SwiperProps) {
    //** Functions */
    const renderSwiperSlide = (data: any, type?: SwiperType) => {
        switch (type) {
            case SwiperType.SLIDE:
                return data.map((dataItem: slideType) => (
                    <SwiperSlide key={dataItem.id}>
                        <Link
                            className="inline-block w-full h-[250px] sm:h-[350px] md:h-[450px]"
                            href={ROUTER.HOME_PAGE}
                        >
                            <ImageComponent
                                className="img:object-cover"
                                src={dataItem?.url}
                                alt={dataItem?.alt}
                            />
                        </Link>
                    </SwiperSlide>
                ));

            case SwiperType.PRODUCT_DETAIL:
                return data?.map((detailItem: { url: string }) => (
                    <SwiperSlide key={detailItem.url}>
                        <Link
                            key={detailItem.url}
                            className="inline-block w-full h-[300px] sm:h-[500px] rounded-md"
                            href={""}
                            scroll={false}
                        >
                            <ImageComponent
                                src={detailItem.url}
                                alt={detailItem.url}
                            />
                        </Link>
                    </SwiperSlide>
                ));

            default:
                return data?.map((productItem: ProductProps) => (
                    <SwiperSlide key={productItem.id}>
                        <ProductItem
                            key={productItem.id}
                            data={productItem as ProductProps}
                        />
                    </SwiperSlide>
                ));
        }
    };

    return (
        <Swiper
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
            slidesPerView={
                slidesPerView && slidesPerView[slidesPerView.length - 1]
            }
            spaceBetween={20}
            breakpoints={
                slidesPerView && {
                    640: {
                        slidesPerView: slidesPerView[2],
                    },
                    768: {
                        slidesPerView: slidesPerView[1],
                    },
                    1024: {
                        slidesPerView: slidesPerView[0],
                    },
                }
            }
        >
            {renderSwiperSlide(data, type)}
        </Swiper>
    );
}
