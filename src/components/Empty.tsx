"use client";
import React from "react";
import { TEXT } from "@/constants/text";

export default function Empty() {
    return (
        <div className="bg-primary-100 py-2 sm:px-5 px-3 rounded-md">
            {TEXT.EMPTY_PAGE}
        </div>
    );
}
