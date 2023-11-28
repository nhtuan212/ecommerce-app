"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouterCustomHook } from "@/lib/customHooks";
import { twMerge } from "tailwind-merge";

//** Interfaces */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

export default function Input({
    className,
    startIcon,
    endIcon,

    //** Functions */
    onChange,
    onKeyDown,

    ...props
}: InputProps) {
    //** Custom Hooks */
    const { searchParams } = useRouterCustomHook();

    //** Variables */
    const disabledClassName = "bg-transparent text-black/50 opacity-50";
    const formInputClassName = twMerge(
        "flex items-center px-2 py-1.5 border border-gray rounded-md shadow-sm shadow-gray-200",
        props.disabled && disabledClassName,
        className,
    );
    const inputClassName = clsx(
        "flex-1 w-full focus:outline-none",
        props.disabled && disabledClassName,
    );

    //** States */
    const [searchValue, setSearchValue] = useState("");

    //** Functions */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        typeof onChange === "function" && onChange(event);
        setSearchValue(event?.target?.value);
    };

    //** Hooks */
    useEffect(() => {
        setSearchValue(searchParams.get("search") || "");
    }, [searchParams, setSearchValue]);

    return (
        <div className={formInputClassName}>
            {startIcon && <span className="mr-2">{startIcon}</span>}
            <input
                className={inputClassName}
                value={searchValue}
                onChange={event => handleChange(event)}
                onKeyDown={onKeyDown}
                {...props}
            />
            {endIcon && <span className="mr-2">{endIcon}</span>}
        </div>
    );
}
