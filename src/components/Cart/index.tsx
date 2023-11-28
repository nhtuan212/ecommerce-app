import React from "react";
import { cookies } from "next/headers";
import CartModal from "./CartModal";
import { getCheckoutById } from "@/lib/saleor/graphql/fetch/checkout";
import { CheckoutProps } from "@/lib/saleor/types";

export default async function Cart() {
    const checkoutId: string = cookies().get("checkoutId")?.value || "";
    const checkout = checkoutId && (await getCheckoutById({ id: checkoutId }));

    return <CartModal checkout={checkout as CheckoutProps} />;
}
