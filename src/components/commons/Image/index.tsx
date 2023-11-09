import React from "react";
import Image from "next/image";
import Link from "next/link";

//** Constants */
import { TEXT } from "@/constants/text";

//** TypeProps */
import { ImageTypeProps } from "@typeProps/ImageTypeProps";

//** Interfaces */
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    src: string;
    slug?: string;
    priority?: boolean;
    objectFit?: ImageTypeProps;
}

export default function ImageComponent({
    className,
    width,
    height,
    src,
    alt = TEXT.IMAGE.ALT,
    slug,
    priority = true,
    objectFit = ImageTypeProps.CONTAIN,
}: ImageProps) {
    //** Functions */
    const renderImage = () => {
        const children = (
            <Image
                className={className}
                src={src}
                width={width}
                height={height}
                alt={alt}
                priority={priority}
                style={{
                    objectFit,
                }}
            />
        );

        if (slug) {
            return (
                <Link className={className} href={slug}>
                    {children}
                </Link>
            );
        }

        return children;
    };

    return renderImage();
}
