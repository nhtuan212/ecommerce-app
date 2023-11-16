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

export default function IconComponent({ ...props }: FontAwesomeIconProps) {
    return (
        <i className={props.className}>
            <FontAwesomeIcon {...props} />
        </i>
    );
}
