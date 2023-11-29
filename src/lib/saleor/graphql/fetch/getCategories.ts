import { GetCategoriesDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { categoryModel } from "../../model/categoryModel";
import { TAGS } from "@/lib/saleor/constants";
import { CategoryProps, VercelCommerceCategory } from "@/lib/saleor/types";
import { TEXT } from "@/constants/text";

export async function getCategories(): Promise<CategoryProps[]> {
    const saleorCategory = await saleorFetch({
        query: GetCategoriesDocument,
        tags: [TAGS.categories],
    });

    if (!saleorCategory.categories) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return (
        saleorCategory.categories?.edges.map(item =>
            categoryModel(item.node as VercelCommerceCategory),
        ) || []
    );
}
