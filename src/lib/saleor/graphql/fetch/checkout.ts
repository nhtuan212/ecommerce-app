import {
    CheckoutCreateDocument,
    CheckoutLinesAddDocument,
    GetCheckoutByIdDocument,
} from "../../generated/graphql";
import { saleorFetch } from ".";
import { TEXT } from "@/constants/text";
import { checkoutModel } from "../../model/checkoutModel";
import { CheckoutProps } from "../../types";

export async function getCheckoutById({
    id,
}: {
    id: string;
}): Promise<CheckoutProps> {
    const saleorGetCheckout = await saleorFetch({
        query: GetCheckoutByIdDocument,
        variables: {
            id,
        },
        cache: "no-store",
    });

    if (!saleorGetCheckout?.checkout) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return checkoutModel(saleorGetCheckout?.checkout);
}

export async function checkoutCreate(): Promise<CheckoutProps> {
    const saleorCheckoutCreate = await saleorFetch({
        query: CheckoutCreateDocument,
        variables: {
            input: {
                channel: "default-channel",
                lines: [],
            },
        },
        cache: "no-store",
    });

    if (!saleorCheckoutCreate.checkoutCreate?.checkout) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    return checkoutModel(saleorCheckoutCreate.checkoutCreate?.checkout);
}

export async function checkoutLinesAdd({
    checkoutId,
    lines,
}: {
    checkoutId: string;
    lines: { productId: string; quantity: number }[];
}): Promise<CheckoutProps> {
    const saleorCheckoutLinesAdd = await saleorFetch({
        query: CheckoutLinesAddDocument,
        variables: {
            checkoutId,
            lines: lines.map(({ productId, quantity }) => ({
                variantId: productId,
                quantity,
            })),
        },
        cache: "no-store",
    });

    if (!saleorCheckoutLinesAdd.checkoutLinesAdd?.checkout) {
        throw new Error(TEXT.EMPTY_FETCH);
    }

    console.log("result", saleorCheckoutLinesAdd.checkoutLinesAdd?.checkout);

    return checkoutModel(saleorCheckoutLinesAdd.checkoutLinesAdd?.checkout);
}
