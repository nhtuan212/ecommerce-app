import React from "react";
import Link from "next/link";

//** Components */
import IconComponent from "@/components/Icons";
import Menu from "./Menu";
import Logo from "../Logo";
import CollectionSearch from "./Search";

//** Configs */
import { PAGE } from "@/configs/router";

export default function Header() {
    return (
        <header className="flex justify-between items-center flex-wrap px-4 py-8">
            <div className="basis-3/5 flex items-center">
                <Logo />
                <Menu />
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
