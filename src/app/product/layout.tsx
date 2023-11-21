import React, { Suspense } from "react";
import Categories from "@/components/Layout/Product/Categories";
import { getCategories } from "@/lib/saleor/graphql/fetch/getCategories";

export default async function layoutExamples({
    children,
}: {
    children: React.ReactNode;
}) {
    const categories = (await getCategories()).filter(item => item.level === 0);

    return (
        <Suspense>
            <article className="container">
                <div className="flex flex-wrap mt-6">
                    <div className="basis-2/12">
                        <Categories data={categories} />
                    </div>
                    <div className="basis-10/12">{children}</div>
                </div>
            </article>
        </Suspense>
    );
}
