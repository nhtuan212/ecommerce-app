import React from "react";
import Link from "next/link";
import LogoIcon from "./Icons/Logo";
import { PAGE } from "@/configs/router";

export default function Logo() {
    return (
        <Link
            href={PAGE.HOME_PAGE}
            className="flex justify-center items-center"
        >
            <div className="flex justify-center items-center p-2 border rounded-md">
                <LogoIcon
                    width="64"
                    height="58"
                    className="w-[1.25rem] h-[1.25rem]"
                />
            </div>
            <p className="hidden md:block ml-2 font-bold text-2xl">
                {process.env.SITE_NAME}
            </p>
        </Link>
    );
}
