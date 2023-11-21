"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { TEXT } from "@/constants/text";

//** Interfaces */
interface ImageProps extends React.ComponentProps<typeof Image> {
    isInteractive?: boolean;
}

export default function ImageComponent({
    className,
    alt = TEXT.IMAGE.ALT,
    isInteractive = false,
    ...props
}: ImageProps) {
    //** Variables */
    const imageClassName = clsx(
        "relative flex justify-center items-center w-full h-full overflow-hidden",
        // access to img element
        "img:relative img:h-full img:w-full img:object-contain",
        isInteractive &&
            "img:transition img:duration-300 img:ease-in-out img:hover:scale-105 img:hover:opacity-80",
        className,
    );

    return (
        <div className={imageClassName}>
            <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={alt}
                priority={true}
                {...props}
            />
        </div>
    );
}
