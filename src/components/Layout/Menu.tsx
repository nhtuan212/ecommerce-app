"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouterCustomHook } from "@/lib/customHooks";
import { MenuConfig } from "@/configs/menu";
import { isEmpty } from "lodash";
import { CollectionProps } from "@/lib/saleor/types";
import { ROUTER } from "@/configs/router";

export default function Menu({
    collections,
}: {
    collections: CollectionProps[];
}) {
    const { pathname } = useRouterCustomHook();

    return (
        !isEmpty(MenuConfig) && (
            <ul className="flex ml-5">
                {/** Config Menu */}
                {MenuConfig.map(item => {
                    const { name, slug } = item;

                    return (
                        <li
                            key={name}
                            className={clsx(
                                "px-2 hover:underline",
                                pathname.includes(slug) && "underline",
                            )}
                        >
                            <Link href={slug}>{name}</Link>
                        </li>
                    );
                })}
                {/** Dynamic Menu */}
                {collections.map(collectionItem => {
                    const { id, name, slug } = collectionItem;

                    return (
                        <li
                            key={id}
                            className={clsx(
                                "px-2 hover:underline",
                                pathname.includes(slug) && "underline",
                            )}
                        >
                            <Link href={`${ROUTER.COLLECTION}/${slug}`}>
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    );
}
