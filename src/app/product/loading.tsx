import React from "react";
import Grid from "@/components/Grid";

export default function Loading() {
    return (
        <Grid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
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
