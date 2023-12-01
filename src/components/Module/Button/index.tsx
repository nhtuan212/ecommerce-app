"use client";
import React from "react";
import Button, { ButtonColors } from "@/components/Button";
import { TEXT } from "@/constants/text";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function ButtonModules() {
    //** Functions */
    const handleClick = () => {
        console.log("Button Clicked");
    };

    return (
        <section className="py-4">
            <h1 className="mb-2">
                <b>Button</b>
            </h1>

            <Button
                className="mx-2"
                color={ButtonColors.Primary}
                onClick={handleClick}
            >
                {TEXT.BUTTON.CLICK_ME}
            </Button>

            <Button className="mx-2" color={ButtonColors.Error}>
                <TrashIcon className="w-4 h-4 mr-2" />
                {TEXT.BUTTON.CLICK_ME}
            </Button>

            <Button className="mx-2" color={ButtonColors.Success} disabled>
                {TEXT.BUTTON.CLICK_ME}
                <TrashIcon className="w-4 h-4 ml-2" />
            </Button>

            <Button
                className="mx-2"
                url={"/"}
                color={ButtonColors.Success}
                value={TEXT.BUTTON.CLICK_ME}
            >
                {TEXT.BUTTON.CLICK_ME}
                <TrashIcon className="w-4 h-4 ml-2" />
            </Button>
        </section>
    );
}
