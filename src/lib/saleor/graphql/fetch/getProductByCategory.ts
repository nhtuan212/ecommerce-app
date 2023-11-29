import { GetProductByCategoryDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { TAGS } from "@/lib/saleor/constants";
import { CategoryProps } from "@/lib/saleor/types";
import { productByCategoryModel } from "../../model/productByCategoryModel";
import { TEXT } from "@/constants/text";

export async function getProductByCategory({
    slug,
}: {
    slug: string;
}): Promise<CategoryProps> {
    const saleorProductByCategory = await saleorFetch({
        query: GetProductByCategoryDocument,
        variables: { slug },
        tags: [TAGS.categories],
    });

    if (!saleorProductByCategory?.category) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return productByCategoryModel(saleorProductByCategory?.category);
}
