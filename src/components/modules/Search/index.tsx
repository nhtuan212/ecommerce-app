"use client";

import React, { useState } from "react";

//** Custom Hooks */
import { useRouterCustomHook } from "@/helpers/customHooks";

//** Components */
import IconComponent from "@commonComponents/Icon";
import InputComponent from "@commonComponents/Input";

//** Constants */
import { TEXT } from "@/constants/text";
import { PAGE } from "@/constants/router";

export default function SearchModule() {
    //** Custom Hooks */
    const router = useRouterCustomHook();

    //** States */
    const [value, setValue] = useState("");

    //** Functions */
    const handleSearch = () => {
        if (!value) return alert(TEXT.EMPTY_SEARCH);
        router.push(PAGE.EXAMPLE);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event?.target?.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        switch (event?.key) {
            case "Enter":
                handleSearch();
                break;
            default:
                break;
        }
    };

    return (
        <div className="basis-1/2">
            <InputComponent
                endIcon={
                    <IconComponent
                        className="text-gray"
                        icon={"diamond-turn-right"}
                        onClick={handleSearch}
                    />
                }
                placeholder={TEXT.INPUT.PLACEHOLDER}
                onChange={event => handleChange(event)}
                onKeyDown={event => handleKeyDown(event)}
            />
        </div>
    );
}
