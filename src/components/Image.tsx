"use client";
import React from "react";
import Image from "next/image";

//** Constants */
import { TEXT } from "@/constants/text";

//** Styles */
import clsx from "clsx";

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
        "relative h-full w-full object-contain",
        className,
        isInteractive &&
            "transition duration-300 ease-in-out hover:scale-105 hover:opacity-80",
    );

    return (
        <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
            <Image
                className={imageClassName}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={alt}
                priority={true}
                {...props}
            />
        </div>
    );
}
