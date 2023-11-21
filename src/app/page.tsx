import React from "react";
import Slide from "@/components/Slide";
import ProductHomePage from "@/components/Layout/Product/ProductHomePage";
import { getCategories } from "@/lib/saleor/graphql/fetch/getCategories";
import { isEmpty } from "lodash";

export default async function Home() {
    const categories = (await getCategories()).filter(
        item => item.level === 0 && !isEmpty(item.products),
    );

    return (
        <>
            <Slide />
            <ProductHomePage categories={categories} />
        </>
    );
}
