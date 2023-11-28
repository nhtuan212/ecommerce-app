import React from "react";
import clsx from "clsx";

const LoadingDots = ({ className }: { className: string }) => {
    const dotsClassName = "w-1 h-1 mx-[1px] rounded-full animate-bounce";

    return (
        <span className="mx-2 inline-flex items-center">
            <span
                className={clsx(
                    dotsClassName,
                    "[animation-delay:-0.3s]",
                    className,
                )}
            />
            <span
                className={clsx(
                    dotsClassName,
                    "[animation-delay:-0.15s]",
                    className,
                )}
            />
            <span className={clsx(dotsClassName, className)} />
        </span>
    );
};

export default LoadingDots;
