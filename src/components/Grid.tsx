import React from "react";
import clsx from "clsx";

//** Interfaces */
interface GridsProps {
    children: React.ReactNode;
    className?: string;
}

const Grid = ({ children, className }: GridsProps) => {
    return (
        <div className={clsx("grid grid-flow-row gap-2", className)}>
            {children}
        </div>
    );
};

const GridItem = ({ children, className }: GridsProps) => {
    return (
        <div className={clsx("aspect-square transition-opacity", className)}>
            {children}
        </div>
    );
};

Grid.Item = GridItem;

export default Grid;
