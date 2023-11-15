import React from "react";

//** Components */
// import Slide from "@/components/Slide";
import Product from "@/components/Layout/Product";

import { getProduct } from "@/lib/saleor";

export default async function Home() {
    const products = await getProduct();

    return (
        <>
            {/* <Slide /> */}
            <Product products={products} />
        </>
    );
}
