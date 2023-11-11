import React from "react";

//** Components */
import CategoryGroup from "@/components/Layout/Product/CategoryGroup";

//** Constants */
import { TEXT } from "@/constants/text";

export default function ProductPage() {
    return (
        <article className="container">
            <h3 className="title">{TEXT.MENU.PRODUCT}</h3>
            <div>{TEXT.SLOGAN}</div>
            <CategoryGroup />
        </article>
    );
}
