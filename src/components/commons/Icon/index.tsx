"use client";
import React from "react";

//** Fontawesomes */
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "@commonComponents/Button";
import { ButtonVariants } from "@typeProps/ButtonTypeProps";

library.add(fas);

//** Interface */
interface IconProps extends FontAwesomeIconProps {
    onClick?: () => {} | void;
}

export default function IconComponent({
    className,
    icon,
    rotation,
    onClick,

    //** Animations */
    spin,
    beat,
    fade,
    bounce,
    shake,
}: IconProps) {
    //** Functions */
    const renderIcon = () => {
        const children = (
            <i className={className}>
                <FontAwesomeIcon
                    icon={icon}
                    rotation={rotation}
                    //** Animations */
                    spin={spin}
                    beat={beat}
                    fade={fade}
                    bounce={bounce}
                    shake={shake}
                />
            </i>
        );
        if (typeof onClick === "function") {
            return (
                <ButtonComponent
                    className="p-0"
                    variant={ButtonVariants.TEXT}
                    onClick={onClick}
                >
                    {children}
                </ButtonComponent>
            );
        }

        return children;
    };

    return renderIcon();
}
