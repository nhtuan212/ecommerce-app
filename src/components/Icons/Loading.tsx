import clsx from "clsx";
import React from "react";

//** Interface */
interface LoadingIconProps {
    className?: string;
}

export default function LoadingIcon({ ...props }: LoadingIconProps) {
    const loadingClassName = clsx(
        "w-10 h-10 text-gray animate-spin",
        props.className && props.className,
    );

    return (
        <svg
            className={loadingClassName}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <path
                className="opacity-75"
                d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                fill="currentColor"
            ></path>
        </svg>
    );
}
