"use client";
import React from "react";
import { useRouterCustomHook } from "@/lib/customHooks";
import { twMerge } from "tailwind-merge";

//** Enums */
export enum ButtonColors {
    Primary = "Primary",
    Success = "Success",
    Error = "Error",
}

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
    const { router } = useRouterCustomHook();

    //** Variables */
    const ButtonStyles = {
        Button: "inline-flex justify-center items-center py-1.5 px-2.5 align-middle rounded-md hover:opacity-90 active:opacity-100 disabled:opacity-50 disabled:pointer-events-none",
        Color: {
            [ButtonColors.Primary]: "bg-primary text-white",
            [ButtonColors.Error]: "bg-error text-white",
            [ButtonColors.Success]: "bg-success text-white",
        },
        Outline: {
            [ButtonColors.Primary]:
                "bg-transparent border border-primary text-primary",
            [ButtonColors.Error]:
                "bg-transparent border border-error text-error",
            [ButtonColors.Success]:
                "bg-transparent border border-success text-success",
        },
    };
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
