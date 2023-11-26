import React from "react";
import Menu from "./Menu";
import Logo from "../Logo";
import Search from "../Search";
import Cart from "../Cart";
import { MenuConfig } from "@/configs/menu";
import { ROUTER } from "@/configs/router";
import { getCollections } from "@/lib/saleor/graphql/fetch/getCollections";

export default async function Header() {
    const collections = await getCollections();

    // Custom menu
    const menuCollection = collections.map(item => ({
        ...item,
        slug: `${ROUTER.COLLECTION}/${item.slug}`,
    }));
    const menu = MenuConfig.concat(menuCollection);

    return (
        <header className="flex justify-between items-center flex-wrap px-4 py-8 shadow-md">
            <div className="basis-3/5 flex items-center">
                <Logo />
                <Menu menu={menu} />
            </div>
            <div className="basis-2/5 flex items-center">
                <Search />
                <Cart />
            </div>
        </header>
    );
}
