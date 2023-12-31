import { GetCollectionsDocument } from "../../generated/graphql";
import { saleorFetch } from ".";
import { TAGS } from "@/lib/saleor/constants";
import { CollectionProps } from "@/lib/saleor/types";
import { collectionModel } from "../../model/collectionModel";
import { TEXT } from "@/constants/text";

export async function getCollections(): Promise<CollectionProps[]> {
    const saleorCollections = await saleorFetch({
        query: GetCollectionsDocument,
        tags: [TAGS.collections],
    });

    if (!saleorCollections.collections) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return (
        saleorCollections?.collections?.edges?.map(item =>
            collectionModel(item.node),
        ) || []
    );
}
