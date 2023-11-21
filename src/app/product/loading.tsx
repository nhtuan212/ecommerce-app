import React from "react";
import Grid from "@/components/Grid";

export default function Loading() {
    return (
        <Grid className="grid-product">
            {Array(12)
                .fill(0)
                .map((_, index) => {
                    return (
                        <Grid.Item
                            key={index}
                            className="bg-gray-light border border-primary-100 rounded-md animate-pulse"
                        />
                    );
                })}
        </Grid>
    );
}
