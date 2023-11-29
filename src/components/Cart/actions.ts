"use server";
import {
    checkoutCreate,
    checkoutLinesAdd,
    getCheckoutById,
} from "@/lib/saleor/graphql/fetch/checkout";
import { cookies } from "next/headers";

export const addToCart = async ({
    productId,
    quantity = 1,
}: {
    productId: string;
    quantity: number;
}) => {
    let checkoutId: string;
    const checkoutCookie: string = cookies().get("checkoutId")?.value || "";

    if (checkoutCookie) {
        checkoutId = await getCheckoutById({
            id: checkoutCookie,
        }).then(res => res.id);
    } else {
        checkoutId = await checkoutCreate().then(res => {
            cookies().set("checkoutId", res.id);
            return res.id;
        });
    }

    try {
        await checkoutLinesAdd({
            checkoutId,
            lines: [{ productId, quantity }],
        });
    } catch (e) {
        return "Error adding item to cart";
    }
};
