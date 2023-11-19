"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouterCustomHook } from "@/lib/customHooks";
import { MenuConfig } from "@/configs/menu";
import { isEmpty } from "lodash";

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
