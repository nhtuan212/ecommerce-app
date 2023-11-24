"use client";
import React from "react";
import { useRouterCustomHook } from "@/lib/customHooks";
import { ButtonColors } from "@/components/Button/enum";
import { twMerge } from "tailwind-merge";
import { ButtonStyles } from "./styles";

//** Interfaces */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColors;
    outline?: boolean;
    url?: string;
}

const Button = ({
    className,
    color,
    outline,
    url,
    onClick,
    ...props
}: ButtonProps) => {
    //** Custom Hooks */
    const router = useRouterCustomHook();

    //** Variables */
    const buttonClassName = twMerge(
        ButtonStyles.Button,
        color && ButtonStyles.Color[color],
        color && outline && ButtonStyles.Outline[color],
        className,
    );

    //** Functions */
    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        typeof onClick === "function" && onClick(event);
        url && router.push(url);
    };

    return (
        <button
            className={buttonClassName}
            onClick={event => handleClick(event)}
            {...props}
        >
            {props?.children && props?.children}
        </button>
    );
};

export default Button;
