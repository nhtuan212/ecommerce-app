"use client";
import React, { useState, useTransition } from "react";
import Prose from "@/components/Prose";
import Price from "@/components/Price";
import Button, { ButtonColors } from "@/components/Button";
import SwiperComponent, { SwiperType } from "@/components/Swiper";
import { addToCart } from "@/components/Cart/actions";
import LoadingDots from "@/components/Icons/LoadingDots";
import Related from "./Related";
import Variant from "./Variant";
import clsx from "clsx";
import { TEXT } from "@/constants/text";
import { useRouterCustomHook } from "@/lib/customHooks";
import { ProductProps } from "@/lib/saleor/types";
import { isEmpty } from "lodash";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useCartStore } from "@/store/useCartStore";

export default function Detail({ data }: { data: ProductProps }) {
    //** Zustand */
    const quantity = useCartStore(state => state.quantity);

    //** Custom hooks */
    const { router, searchParams } = useRouterCustomHook();
    const [isPending, startTransition] = useTransition();

    //** Variables */
    const { name, description, price, media, variants, related } = data;

    const variantParams = variants?.availableValues.find(
        item => item.name === searchParams.get(variants.name.toLowerCase()),
    );

    const productId = variantParams?.id || variants?.id;

    //** State */
    const [error, setError] = useState<string>("");

    //** Functions */
    const handleAddToCart = () => {
        if (!isEmpty(variants?.availableValues) && !variantParams) {
            return setError(`!! Please select ${variants?.name}`);
        }

        startTransition(async () => {
            await addToCart({
                productId,
                quantity,
            }).then(() => setError(""));
            router.refresh();
        });
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
                        price={variantParams?.pricing || price}
                    />
                    <div className={clsx("p-3 -ml-3", error && "bg-gray-100")}>
                        <Variant variants={variants} />
                        {error && (
                            <p className="mt-3 text-sm text-error">{error}</p>
                        )}
                    </div>
                    <div className="py-3">
                        <Prose html={description} />
                    </div>
                    <Button
                        className="relative w-full p-3"
                        color={ButtonColors.Primary}
                        onClick={handleAddToCart}
                        disabled={isPending}
                    >
                        <PlusIcon className="w-5 h-5 mr-2" />
                        {TEXT.ADD_TO_CART}
                        {isPending && <LoadingDots className="bg-white" />}
                    </Button>
                </div>
            </div>

            {related && <Related relatedData={related} />}
        </article>
    );
}
