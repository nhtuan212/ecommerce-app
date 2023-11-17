"use client";

import React from "react";
import Link from "next/link";

//** Custom Hooks */
import { useRouterCustomHook } from "@/lib/customHooks";

//** Configs */
import { MenuConfig } from "@/configs/menu";

//** Lodash */
import { isEmpty } from "lodash";

//** Styles */
import clsx from "clsx";

export default function Menu() {
    const { pathname } = useRouterCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <menu className="bg-primary flex justify-center items-center text-white">
                {MenuConfig.map(item => (
                    <li key={item?.name}>
                        <Link
                            href={item?.slug}
                            className={clsx(
                                "block py-3 px-4",
                                item?.slug === pathname && "bg-primary-700",
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
