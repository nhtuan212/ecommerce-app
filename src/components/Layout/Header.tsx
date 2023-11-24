import React from "react";
import Menu from "./Menu";
import Logo from "../Logo";
import CollectionSearch from "../Search";
import Cart from "../Cart";
import { getCollections } from "@/lib/saleor/graphql/fetch/getCollections";

export default async function Header() {
    const collections = await getCollections();

    return (
        <header className="flex justify-between items-center flex-wrap px-4 py-8 shadow-md">
            <div className="basis-3/5 flex items-center">
                <Logo />
                <Menu collections={collections} />
            </div>
            <div className="basis-2/5 flex items-center">
                <CollectionSearch />
                <Cart />
            </div>
        </header>
    );
}
