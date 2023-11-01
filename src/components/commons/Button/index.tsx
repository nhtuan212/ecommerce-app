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
    onClick?: () => {} | void;
}

const ButtonComponent = ({
    color = ButtonColors.PRIMARY,
    size = ButtonSizes.MEDIUM,
    variant = ButtonVariants.CONTAINED,
    startIcon,
    endIcon,
    title = TEXT.BUTTON.TITLE,
    url,
    ...restProps
}: ButtonProps) => {
    //** Variables */
    const router = useRouterCustomHook();

    const buttonClassName = twMerge(
        styles.Button,
        restProps?.className,
        BUTTON_COLORS[color],
        BUTTON_SIZES[size],
        BUTTON_VARIANTS[variant][color],
    );

    //** Functions */
    const handleClick = () => {
        typeof restProps?.onClick === "function" && restProps?.onClick();
        url && router.push(url);
    };

    return (
        <button
            className={buttonClassName}
            onClick={handleClick}
            disabled={restProps?.disabled}
            title={title}
        >
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {restProps?.value && restProps?.value}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    );
};

export default ButtonComponent;
