"use client";
import React, { useState } from "react";

//** Styles */
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

//** Interfaces */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

export default function InputComponent({
    className,
    type,
    value,
    startIcon,
    endIcon,
    placeholder,
    disabled,

    //** Functions */
    onChange,
    onKeyDown,
}: InputProps) {
    //** Variables */
    const formInputClassName = twMerge(
        styles.InputContainer,
        disabled && styles.InputDisabled,
    );
    const inputClassName = twMerge(styles.Input, className);

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
                type={type}
                disabled={disabled}
                value={valueInput}
                placeholder={placeholder}
                onChange={event => handleChange(event)}
                onKeyDown={onKeyDown}
            />
            {endIcon && <span className="mr-2">{endIcon}</span>}
        </div>
    );
}
