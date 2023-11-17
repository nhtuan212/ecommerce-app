"use client";
import React, { useState } from "react";

//** Styles */
import clsx from "clsx";

//** Interfaces */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

export default function Input({
    className,
    value,
    startIcon,
    endIcon,

    //** Functions */
    onChange,
    onKeyDown,

    ...props
}: InputProps) {
    //** Variables */
    const disabledClassName = "bg-transparent text-black/50 opacity-50";
    const formInputClassName = clsx(
        "flex items-center px-2 py-1.5 border border-gray-light rounded-md shadow-sm shadow-gray-light",
        props.disabled && disabledClassName,
    );
    const inputClassName = clsx(
        "flex-1 focus:outline-none",
        props.disabled && disabledClassName,
        className,
    );

    //** States */
    const [valueInput, setValueInput] = useState(value);

    //** Functions */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        typeof onChange === "function" && onChange(event);
        setValueInput(event?.target?.value);
    };

    return (
        <div className={formInputClassName}>
            {startIcon && <span className="mr-2">{startIcon}</span>}
            <input
                className={inputClassName}
                value={valueInput}
                onChange={event => handleChange(event)}
                onKeyDown={onKeyDown}
                {...props}
            />
            {endIcon && <span className="mr-2">{endIcon}</span>}
        </div>
    );
}
