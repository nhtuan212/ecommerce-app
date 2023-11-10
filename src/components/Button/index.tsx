"use client";

import React from "react";

//** CustomHooks */
import { useRouterCustomHook } from "@/helpers/customHooks";

//** Constants */
import { TEXT } from "@/constants/text";
import { ButtonColors } from "@/constants/enums/eButton";

//** Styles */
import { twMerge } from "tailwind-merge";
import { ButtonStyles } from "./styles";

//** Interfaces */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColors;
    outline?: boolean;
    url?: string;
}

const ButtonComponent = ({
    children,
    color,
    outline,
    title = TEXT.BUTTON.TITLE,
    className,
    disabled,
    url,
    onClick,
}: ButtonProps) => {
    //** Custom Hooks */
    const router = useRouterCustomHook();

    //** Variables */
    const buttonClassName = twMerge(
        ButtonStyles.Button,
        color && ButtonStyles.Color[color],
        outline && color && ButtonStyles.Outline[color],
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
            disabled={disabled}
            title={title}
        >
            {children && children}
        </button>
    );
};

export default ButtonComponent;
