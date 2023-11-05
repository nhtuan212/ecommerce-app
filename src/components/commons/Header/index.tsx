"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//** Components */
import SearchModule from "@moduleComponents/Search";
import IconComponent from "@commonComponents/Icon";

//** Constants */
import { PAGE } from "@/configs/router";

//** Styles */
import styles from "./styles.module.scss";

export default function HeaderComponent() {
    return (
        <header className={styles.Header}>
            <Link href={PAGE.HOME_PAGE}>
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </Link>
            <SearchModule />
            <Link href={PAGE.EXAMPLE}>
                <IconComponent icon="cart-shopping" />
            </Link>
        </header>
    );
}
