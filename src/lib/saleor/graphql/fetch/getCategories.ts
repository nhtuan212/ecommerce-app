import { getCategoriesDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { categoryModel } from "../../model/categoryModel";
import { TAGS } from "@/lib/saleor/constants";
import { CategoryProps, VercelCommerceCategory } from "@/lib/saleor/types";

export async function getCategories(): Promise<CategoryProps[]> {
    const saleorCategory = await saleorFetch({
        query: getCategoriesDocument,
        tags: [TAGS.categories],
    });

    if (!saleorCategory.categories) {
        throw new Error("Category not found");
    }

    return (
        saleorCategory.categories?.edges.map(item =>
            categoryModel(item.node as VercelCommerceCategory),
        ) || []
    );
}
