"use client";

import React from "react";

//** Constants */
import {
    BUTTON_COLORS,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
} from "@/constants/themes/button";

//** Type Props */
import {
    ButtonColors,
    ButtonSizes,
    ButtonVariants,
} from "@typeProps/ButtonTypeProps";

//** CustomHooks */
import { useRouterCustomHook } from "@/helpers/customHooks";

//** Styles */
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";
import { TEXT } from "@/constants/text";

//** Interfaces */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColors;
    size?: ButtonSizes;
    variant?: ButtonVariants;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    url?: string;
}

const ButtonComponent = ({
    children,
    color = ButtonColors.PRIMARY,
    size = ButtonSizes.MEDIUM,
    variant = ButtonVariants.CONTAINED,
    title = TEXT.BUTTON.TITLE,
    className,
    value,
    disabled,
    startIcon,
    endIcon,
    url,
    onClick,
}: ButtonProps) => {
    //** Custom Hooks */
    const router = useRouterCustomHook();

    //** Variables */
    const buttonClassName = twMerge(
        styles.Button,
        BUTTON_COLORS[color],
        BUTTON_SIZES[size],
        BUTTON_VARIANTS[variant][color],
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
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {children && children}
            {value && value}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    );
};

export default ButtonComponent;
