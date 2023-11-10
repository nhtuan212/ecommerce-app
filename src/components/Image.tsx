"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

//** Constants */
import { TEXT } from "@/constants/text";
import { ImageTypeProps } from "@/constants/enums/eImage";

//** Styles */
import clsx from "clsx";

//** Interfaces */
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width: number;
    height: number;
    src: string;
    link?: string;
    priority?: boolean;
    objectFit?: ImageTypeProps;
}

export default function ImageComponent({
    className,
    width,
    height,
    src,
    alt = TEXT.IMAGE.ALT,
    link,
    priority = true,
}: ImageProps) {
    //** Variables */
    const imageContainer = "relative block w-full h-auto";
    const imageClassName = clsx("object-contain", className);
    // Calculation ratio width - height props
    const style = { paddingBottom: `min(350px, ${100 / (width / height)}%)` };

    //** Functions */
    const renderImage = () => {
        const children = (
            <Image
                className={imageClassName}
                src={src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={alt}
                priority={priority}
            />
        );

        if (link) {
            return (
                <Link className={imageContainer} style={style} href={link}>
                    {children}
                </Link>
            );
        }

        return (
            <div className={imageContainer} style={style}>
                {children}
            </div>
        );
    };

    return renderImage();
}
