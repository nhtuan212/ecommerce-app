"use client";
import React from "react";

//** Fontawesomes */
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function IconComponent({
    className,
    icon,
    rotation,

    //** Animations */
    spin,
    beat,
    fade,
    bounce,
    shake,
}: FontAwesomeIconProps) {
    return (
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
}
