"use client";
import React from "react";
import Link from "next/link";

//** Custom Hooks */
import { useRouterCustomHook } from "@/lib/customHooks";

//** Configs */
import { MenuConfig } from "@/configs/menu";

//** Lodash */
import { isEmpty } from "lodash";

import clsx from "clsx";

export default function Menu() {
    const { pathname } = useRouterCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <ul className="flex ml-5">
                {MenuConfig.map(item => {
                    const { name, slug } = item;

                    return (
                        <li
                            key={name}
                            className={clsx(
                                "px-2 hover:underline",
                                slug === pathname && "underline",
                            )}
                        >
                            <Link href={slug}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        )
    );
}
