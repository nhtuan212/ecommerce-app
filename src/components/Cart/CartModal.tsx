"use client";
import React, { useEffect, useRef, useState } from "react";
import Button, { ButtonColors } from "../Button";
import CartItem from "./CartItem";
import Price from "../Price";
import DialogComponent, { DialogTransition } from "../Dialog";
import { TEXT } from "@/constants/text";
import { isEmpty } from "lodash";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { CheckoutProps, ProductCheckoutProps } from "@/lib/saleor/types";

export default function Cart({ checkout }: { checkout: CheckoutProps }) {
    //** Variables */
    const { products, totalQuantity, totalPrice } = checkout;
    const quantityRef = useRef<number | undefined>(totalQuantity);

    //** State */
    const [isOpen, setIsOpen] = useState(false);

    //** Function */
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    //** Hooks */
    useEffect(() => {
        totalQuantity !== quantityRef.current && openModal();
    }, [totalQuantity]);

    return (
        <>
            <Button className="relative ml-2 text-primary" onClick={openModal}>
                <ShoppingCartIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary px-1.5 text-xs text-white rounded-full">
                    {totalQuantity}
                </span>
            </Button>

            <DialogComponent
                containerClassName="fixed top-0 right-0 h-full"
                dialogClassName="md:w-[25rem] max-w-sm h-full rounded-none"
                show={isOpen}
                title={TEXT.MY_CART}
                transition={DialogTransition.RIGHT_TO_LEFT}
                onClose={closeModal}
            >
                {!isEmpty(products) ? (
                    <div className="flex flex-col h-full justify-between py-5">
                        {products.map(
                            (item: ProductCheckoutProps, index: number) => (
                                <CartItem key={index} data={item} />
                            ),
                        )}
                        <div>
                            <div className="flex justify-between py-2">
                                <p>Total</p>
                                <p className="font-bold">
                                    <Price price={totalPrice} />
                                </p>
                            </div>
                            <Button
                                className="w-full"
                                color={ButtonColors.Primary}
                            >
                                {TEXT.CHECK_OUT}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center min-w-sm h-full mt-2">
                        <div className="text-center">
                            <ShoppingCartIcon className="w-20 h-20 m-auto" />
                            <p className="my-3 text-2xl">{TEXT.CART_EMPTY}</p>
                        </div>
                    </div>
                )}
            </DialogComponent>
        </>
    );
}
