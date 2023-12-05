import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

//** Interfaces */
interface CartQuantityProps {
    quantity: number;
    onDecrement?: (value: number) => void | {};
    onIncrement?: (value: number) => void | {};
}

export default function CartQuantity({
    quantity,
    onDecrement,
    onIncrement,
}: CartQuantityProps) {
    //** Variables */
    const buttonClassName = "w-7 p-0 border border-gray rounded";

    //** States */
    const [value, setValue] = useState<number>(quantity);

    //** Functions */
    const handleDecrement = () => {
        typeof onDecrement === "function" && onDecrement(value - 1);
        value > 1 && setValue(value - 1);
    };

    const handleIncrement = () => {
        typeof onIncrement === "function" && onIncrement(value + 1);
        setValue(value + 1);
    };

    return (
        <div className="flex">
            <Button
                className={clsx(buttonClassName, "border-r-0 rounded-e-none")}
                onClick={handleDecrement}
            >
                <MinusIcon className="w-4 h-4" />
            </Button>
            <Input
                className="w-12 py-0 rounded-none input:bg-transparent input:text-center"
                value={value}
            />
            <Button
                className={clsx(buttonClassName, "border-l-0 rounded-s-none")}
                onClick={handleIncrement}
            >
                <PlusIcon className="w-4 h-4" />
            </Button>
        </div>
    );
}
