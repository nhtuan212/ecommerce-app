"use client";
import React, { useState } from "react";
import { useRouterCustomHook } from "@/lib/customHooks";
import IconComponent from "@/components/Icons";
import Input from "@/components/Input";
import { TEXT } from "@/constants/text";
import { ROUTER } from "@/configs/router";
import Button from "@/components/Button";

export default function CollectionSearch() {
    //** Custom Hooks */
    const router = useRouterCustomHook();

    //** States */
    const [value, setValue] = useState("");

    //** Functions */
    const handleSearch = () => {
        if (!value) return alert(TEXT.EMPTY_SEARCH);
        router.push(ROUTER.EXAMPLE);
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
        <div className="w-full">
            <Input
                endIcon={
                    <Button className="p-0" onClick={handleSearch}>
                        <IconComponent
                            className="text-gray"
                            icon={"magnifying-glass"}
                        />
                    </Button>
                }
                placeholder={TEXT.INPUT.PLACEHOLDER}
                onChange={event => handleChange(event)}
                onKeyDown={event => handleKeyDown(event)}
            />
        </div>
    );
}
