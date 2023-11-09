"use client";

import React from "react";

//** Components */
import ButtonComponent from "@commonComponents/Button";
import IconComponent from "@commonComponents/Icon";

//** Constants */
import { TEXT } from "@/constants/text";

//** Type Props */
import {
    ButtonColors,
    ButtonSizes,
    ButtonVariants,
} from "@typeProps/ButtonTypeProps";

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
                color={ButtonColors.ERROR}
                variant={ButtonVariants.OUTLINED}
                size={ButtonSizes.LARGE}
                value={TEXT.BUTTON.CLICK_ME}
                onClick={handleClick}
            />
            <ButtonComponent
                className="mx-2"
                color={ButtonColors.ERROR}
                // variant={ButtonVariants.OUTLINED}
                value={TEXT.BUTTON.CLICK_ME}
                startIcon={<IconComponent icon={"trash"} />}
            />
            <ButtonComponent
                className="mx-2"
                size={ButtonSizes.SMALL}
                color={ButtonColors.SUCCESS}
                value={TEXT.BUTTON.CLICK_ME}
                endIcon={<IconComponent icon={"share-from-square"} />}
                disabled
            />
            <ButtonComponent
                className="mx-2"
                url={"/"}
                size={ButtonSizes.SMALL}
                color={ButtonColors.SUCCESS}
                value={TEXT.BUTTON.CLICK_ME}
                endIcon={<IconComponent icon={"share-from-square"} />}
            />
        </section>
    );
}
