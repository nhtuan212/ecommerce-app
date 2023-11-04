"use client";

import React from "react";
import Link from "next/link";

//** Custom Hooks */
import { usePathnameCustomHook } from "@/helpers/customHooks";

//** Constants */
import { MenuConfig } from "@/constants/menu";

//** Styles */
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

//** Lodash */
import { isEmpty } from "lodash";

export default function MenuComponent() {
    const { pathname } = usePathnameCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <menu className={styles.Menu}>
                {MenuConfig.map(item => (
                    <li key={item.name}>
                        <Link
                            href={item.slug}
                            className={twMerge(
                                styles.MenuItem,
                                item.slug === pathname && styles.MenuItemActive,
                            )}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </menu>
        )
    );
}
