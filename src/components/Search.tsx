"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { TEXT } from "@/constants/text";
import { ROUTER } from "@/configs/router";
import { useRouterCustomHook } from "@/lib/customHooks";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Search() {
    //** Custom Hooks */
    const { router } = useRouterCustomHook();

    //** States */
    const [searchValue, setSearchValue] = useState("");

    //** Functions */
    const handleSearch = () => {
        if (!searchValue) return router.push(ROUTER.PRODUCT);

        router.push(`${ROUTER.PRODUCT}?search=${searchValue}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event?.target?.value);
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
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray" />
                    </Button>
                }
                placeholder={TEXT.INPUT.PLACEHOLDER}
                onChange={event => handleChange(event)}
                onKeyDown={event => handleKeyDown(event)}
            />
        </div>
    );
}
