import { GetCollectionBySlugDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { TAGS } from "@/lib/saleor/constants";
import { CollectionProps } from "@/lib/saleor/types";
import { collectionBySlugModel } from "../../model/collectionBySlugModel";
import { TEXT } from "@/constants/text";

export async function getCollectionBySlug({
    slug,
}: {
    slug: string;
}): Promise<CollectionProps> {
    const saleorCollections = await saleorFetch({
        query: GetCollectionBySlugDocument,
        variables: { slug },
        tags: [TAGS.collections],
    });

    if (!saleorCollections.collection) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return collectionBySlugModel(saleorCollections?.collection);
}
