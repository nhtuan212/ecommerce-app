"use client";

import React, { useState } from "react";

//** Components */
import IconComponent from "@commonComponents/Icon";
import InputComponent from "@commonComponents/Input";

//** Constants */
import { TEXT } from "@/constants/text";

export default function SearchModule() {
    //** States */
    const [value, setValue] = useState(TEXT.INPUT.VALUE);

    //** Functions */
    const handleSearch = () => {
        alert(value);
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
