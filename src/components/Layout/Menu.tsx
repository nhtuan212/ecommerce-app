"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouterCustomHook } from "@/lib/customHooks";
import { MenuConfig } from "@/configs/menu";
import { isEmpty } from "lodash";
import { CollectionProps } from "@/lib/saleor/types";

export default function Menu({ menu }: { menu: CollectionProps[] }) {
    const { pathname } = useRouterCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <ul className="flex ml-5">
                {menu.map(collectionItem => {
                    const { id, name, slug } = collectionItem;

                    return (
                        <li
                            key={id}
                            className={clsx(
                                "px-2 hover:underline",
                                pathname.includes(slug) && "underline",
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
