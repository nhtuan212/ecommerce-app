"use client";

import React from "react";
import Link from "next/link";

//** Custom Hooks */
import { useRouterCustomHook } from "@/helpers/customHooks";

//** Configs */
import { MenuConfig } from "@/configs/menu";

//** Lodash */
import { isEmpty } from "lodash";

//** Styles */
import { twMerge } from "tailwind-merge";
import { MenuStyles } from "./styles";

export default function MenuComponent() {
    const { pathname } = useRouterCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <menu className={MenuStyles.Menu}>
                {MenuConfig.map(item => (
                    <li key={item?.name}>
                        <Link
                            href={item?.slug}
                            className={twMerge(
                                MenuStyles.Item,
                                item?.slug === pathname &&
                                    MenuStyles.ItemActive,
                            )}
                        >
                            {item?.name}
                        </Link>
                    </li>
                ))}
            </menu>
        )
    );
}
