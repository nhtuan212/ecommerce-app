"use client";
import React, { useMemo, useTransition } from "react";
import Link from "next/link";
import ImageComponent from "../Image";
import Price from "../Price";
import CartQuantity from "./CartQuantity";
import Button from "../Button";
import { TEXT } from "@/constants/text";
import { RemoveCart, UpdateCart } from "./actions";
import { ProductCheckoutProps } from "@/lib/saleor/types";
import { useRouterCustomHook } from "@/lib/customHooks";
import LoadingDots from "../Icons/LoadingDots";

export default function CartItem({ data }: { data: ProductCheckoutProps }) {
    //** Custom hooks */
    const { router } = useRouterCustomHook();
    const [isPending, startTransition] = useTransition();

    //** Variables */
    const {
        id,
        lineId,
        name,
        slug,
        thumbnail,
        price,
        quantity,
        attributeName,
        attribute,
    } = data;

    const priceByQuantity = useMemo(() => {
        return {
            ...price,
            amount: price.amount * quantity,
        };
    }, [price, quantity]);

    //** Functions */
    const handleQuantity = (quantity: number) => {
        startTransition(async () => {
            await UpdateCart({
                lineId,
                variantId: id,
                quantity,
            });

            router.refresh();
        });
    };

    const handleDeleteItem = () => {
        startTransition(async () => {
            await RemoveCart({
                linesIds: lineId,
            });

            router.refresh();
        });
    };

    return (
        <div className="relative py-2 border-b">
            <div className="flex justify-between items-center">
                <Link className="flex items-center" href={`/${slug}`}>
                    <div className="w-16 h-16">
                        <ImageComponent
                            className="img:object-cover"
                            src={thumbnail}
                            alt={name}
                            isInteractive
                        />
                    </div>
                    <div>
                        <h3 className="text-base">{name}</h3>
                        {attributeName && attribute && (
                            <p className="text-sm">
                                <span className="text-gray mr-1">
                                    {attributeName}:
                                </span>
                                {attribute}
                            </p>
                        )}
                        <Price className="text-sm" price={price} />
                    </div>
                </Link>

                <div>
                    <Price
                        className="justify-end mb-2 text-sm"
                        price={priceByQuantity}
                    />
                    <CartQuantity
                        quantity={quantity}
                        onIncrement={() => handleQuantity(quantity + 1)}
                        onDecrement={() => handleQuantity(quantity - 1)}
                    />

                    <div className="text-center">
                        <Button
                            className="mt-2 p-0 text-sm text-error"
                            onClick={handleDeleteItem}
                        >
                            {TEXT.DELETE}
                        </Button>
                    </div>
                </div>
            </div>

            {isPending && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white opacity-80">
                    <LoadingDots className="bg-primary" />
                </div>
            )}
        </div>
    );
}
