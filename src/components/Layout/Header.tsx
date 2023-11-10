import React from "react";
import Link from "next/link";

//** Components */
import IconComponent from "@/components/Icons";
import Logo from "../Logo";
import CollectionSearch from "./Search";

//** Configs */
import { PAGE } from "@/configs/router";
import { MenuConfig } from "@/configs/menu";

import { isEmpty } from "lodash";

export default function Header() {
    return (
        <header className="flex justify-between items-center flex-wrap px-4 py-8">
            <div className="basis-3/5 flex items-center">
                <Logo />
                {!isEmpty(MenuConfig) && (
                    <ul className="flex ml-5">
                        {MenuConfig.map(item => (
                            <li
                                key={item?.name}
                                className="px-2 hover:underline"
                            >
                                <Link href={item?.slug}>{item?.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="basis-2/5 flex items-center">
                <CollectionSearch />
                <Link className="ml-2" href={PAGE.EXAMPLE}>
                    <IconComponent icon="cart-shopping" />
                </Link>
            </div>
        </header>
    );
}
