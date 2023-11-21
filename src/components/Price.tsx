"use client";
import React from "react";
import { ProductProps } from "@/lib/saleor/types";
import { twMerge } from "tailwind-merge";
import { isEmpty } from "lodash";

//** Interface */
interface PriceProps {
    className?: string;
    price: ProductProps["price"];
}
interface AmountProps extends PriceProps {
    value: number;
}

export default function Price({ className, price }: PriceProps) {
    const renderAmount = ({ price, value }: AmountProps) => (
        <>
            {`${new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: price.currency,
                currencyDisplay: "narrowSymbol",
            }).format(value)}`}
            <span className="ml-1 inline">{`${price.currency}`}</span>
        </>
    );

    return (
        !isEmpty(price) && (
            <div
                className={twMerge(
                    "flex justify-center items-center gap-2",
                    className,
                )}
                suppressHydrationWarning={true}
            >
                {price?.prevAmount > 0 && (
                    <p className="text-sm text-gray line-through">
                        {renderAmount({ price, value: price.prevAmount })}
                    </p>
                )}

                <p>{renderAmount({ price, value: price.amount })}</p>
            </div>
        )
    );
}
