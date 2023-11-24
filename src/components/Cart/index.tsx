"use client";

import React, { useState } from "react";
import Button from "../Button";
import IconComponent from "../Icons";
import DialogComponent from "../Dialog";
import { TEXT } from "@/constants/text";
import { DialogTransition } from "../Dialog/enum";

export default function Cart() {
    //** State */
    const [isOpen, setIsOpen] = useState(false);

    //** Function */
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Button className="ml-2 text-primary" onClick={openModal}>
                <IconComponent icon="cart-shopping" />
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
                        <IconComponent
                            icon="cart-shopping"
                            className="w-20 h-20"
                        />
                        <p className="my-3 text-2xl">{TEXT.CART_EMPTY}</p>
                    </div>
                </div>
            </DialogComponent>
        </>
    );
}
