"use client";
import React from "react";
import Prose from "@/components/Prose";
import Price from "@/components/Price";
import Button from "@/components/Button";
import { ButtonColors } from "@/components/Button/enum";
import IconComponent from "@/components/Icons";
import SwiperComponent, { SwiperType } from "@/components/Swiper";
import Related from "./Related";
import Variant from "./Variant";
import { TEXT } from "@/constants/text";
import { useRouterCustomHook } from "@/lib/customHooks";
import { ProductProps } from "@/lib/saleor/types";
import { isEmpty } from "lodash";

export default function Detail({ data }: { data: ProductProps }) {
    //** Custom hooks */
    const { searchParams } = useRouterCustomHook();

    //** Variables */
    const { name, description, price, media, variants } = data;
    const priceSize = variants?.availableValues.find(
        item => item.name === searchParams.get(variants.name.toLowerCase()),
    );

    //** Functions */
    const handleAddToCart = () => {
        console.log("handleAddToCart");
    };

    return (
        <article className="container">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-3/5 px-0 sm:px-2">
                    {!isEmpty(media) && (
                        <SwiperComponent
                            data={media}
                            type={SwiperType.PRODUCT_DETAIL}
                        />
                    )}
                </div>
                <div className="w-full sm:w-1/2 md:w-2/5 px-0 sm:px-2">
                    <h1>{name}</h1>
                    <Price
                        className="justify-start py-3 text-2xl"
                        price={priceSize?.pricing || price}
                    />
                    <div className="py-3">
                        <Variant variants={variants} />
                    </div>
                    <div className="py-3">
                        <Prose html={description} />
                    </div>
                    <Button
                        className="w-full p-3"
                        color={ButtonColors.Primary}
                        onClick={handleAddToCart}
                    >
                        <IconComponent className="mr-1" icon={"cart-plus"} />
                        {TEXT.ADD_TO_CART}
                    </Button>
                </div>
            </div>

            {data?.related && <Related relatedData={data?.related} />}
        </article>
    );
}
