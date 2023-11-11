"use client";
import React from "react";

//** Custom Hooks */
import { useRouterCustomHook } from "@/helpers/customHooks";

export default function Category() {
    //** Custom Hooks */
    const { pathname } = useRouterCustomHook();

    return <article className="sm:p-4 p-2">{pathname}</article>;
}
