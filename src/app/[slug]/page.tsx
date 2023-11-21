import React from "react";
import Detail from "@/components/Layout/Product/Detail";
import { getProductBySlug } from "@/lib/saleor/graphql/fetch/getProductBySlug";

export default async function DetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const productDetail = await getProductBySlug({ slug: params.slug });

    return <Detail data={productDetail} />;
}
