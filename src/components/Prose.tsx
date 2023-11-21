"use client";
import React from "react";
import clsx from "clsx";

interface ProseProps {
    html?: string | null;
    className?: string;
}

export default function Prose({ html, className }: ProseProps) {
    return (
        <div
            className={clsx("py-1", className)}
            dangerouslySetInnerHTML={{ __html: html as string }}
        />
    );
}
