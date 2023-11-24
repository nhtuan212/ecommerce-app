"use client";

import React, { useState } from "react";
import Button from "../Button";
import DialogComponent, { DialogTransition } from "../Dialog";
import { TEXT } from "@/constants/text";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

export default function Cart() {
    //** State */
    const [isOpen, setIsOpen] = useState(false);

    //** Function */
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Button className="ml-2 text-primary" onClick={openModal}>
                <ShoppingCartIcon className="w-5 h-5" />
            </Button>

            <DialogComponent
                containerClassName="fixed top-0 right-0 h-full"
                dialogClassName="md:w-[25rem] max-w-sm h-full rounded-none"
                show={isOpen}
                title={TEXT.MY_CART}
                transition={DialogTransition.RIGHT_TO_LEFT}
                onClose={closeModal}
            >
                <div className="flex justify-center items-center min-w-sm h-full mt-2">
                    <div className="text-center">
                        <ShoppingCartIcon className="w-20 h-20 m-auto" />
                        <p className="my-3 text-2xl">{TEXT.CART_EMPTY}</p>
                    </div>
                </div>
            </DialogComponent>
        </>
    );
}
