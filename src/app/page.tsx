import React from "react";
import Slide from "@/components/Slide";
import ProductHomePage from "@/components/Layout/Product/ProductHomePage";
// import { getProduct } from "@/lib/saleor/graphql/fetch/getProduct";
import { getIndexCategories } from "@/lib/saleor/graphql/fetch/getIndexCategories";
import { isEmpty } from "lodash";

export default async function Home() {
    // const products = await getProduct();
    const indexCategories = (await getIndexCategories()).filter(
        item => item.level === 0 && !isEmpty(item.products),
    );

    return (
        <>
            <Slide />
            <ProductHomePage indexCategories={indexCategories} />
        </>
    );
}
