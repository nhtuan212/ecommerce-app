import React from "react";
import Image from "next/image";
import Link from "next/link";

//** Constants */
import { TEXT } from "@/constants/text";

//** Styles */
import styles from "./styles.module.scss";

//** Interfaces */
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    src: string;
    slug?: string;
}

export default function ImageComponent({
    width,
    height,
    src,
    alt = TEXT.IMAGE.ALT,
    slug,
}: ImageProps) {
    //** Functions */
    const renderImage = () => {
        const children = (
            <Image
                className={styles.Image}
                src={src}
                width={width}
                height={height}
                alt={alt}
                style={{
                    objectFit: "contain", // cover, contain, none
                }}
            />
        );

        if (slug) {
            return (
                <Link className={styles.Image} href={slug}>
                    {children}
                </Link>
            );
        }

        return children;
    };

    return renderImage();
}
