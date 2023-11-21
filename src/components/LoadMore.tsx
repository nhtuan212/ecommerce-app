import React from "react";
import Link from "next/link";

//** Interface */
interface LoadMoreProps {
    text: string;
    url?: string;
}

export default function LoadMore({ text, url }: LoadMoreProps) {
    return (
        <div className="my-3 text-sm text-center">
            <Link
                className="inline-flex py-2 px-6 text-primary border border-primary rounded-md hover:bg-primary-50"
                href={url || ""}
                scroll={false}
            >
                {text}
            </Link>
        </div>
    );
}
