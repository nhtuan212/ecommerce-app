"use client";

import React from "react";

//** Components */
import ButtonComponent from "@/components/Button";
import IconComponent from "@/components/Icons";

//** Constants */
import { TEXT } from "@/constants/text";
import { ButtonColors } from "@/constants/enums/eButton";

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

            <ButtonComponent
                className="mx-2"
                color={ButtonColors.Primary}
                onClick={handleClick}
            >
                {TEXT.BUTTON.CLICK_ME}
            </ButtonComponent>

            <ButtonComponent className="mx-2" color={ButtonColors.Error}>
                <IconComponent className="mr-2" icon={"trash"} />
                {TEXT.BUTTON.CLICK_ME}
            </ButtonComponent>

            <ButtonComponent
                className="mx-2"
                color={ButtonColors.Success}
                disabled
            >
                {TEXT.BUTTON.CLICK_ME}
                <IconComponent className="ml-2" icon={"share-from-square"} />
            </ButtonComponent>

            <ButtonComponent
                className="mx-2"
                url={"/"}
                color={ButtonColors.Success}
                value={TEXT.BUTTON.CLICK_ME}
            >
                {TEXT.BUTTON.CLICK_ME}
                <IconComponent className="ml-2" icon={"share-from-square"} />
            </ButtonComponent>
        </section>
    );
}
