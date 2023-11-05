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
import styles from "./styles.module.scss";

export default function MenuComponent() {
    const { pathname } = useRouterCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <menu className={styles.Menu}>
                {MenuConfig.map(item => (
                    <li key={item?.name}>
                        <Link
                            href={item?.slug}
                            className={twMerge(
                                styles.MenuItem,
                                item?.slug === pathname &&
                                    styles.MenuItemActive,
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
