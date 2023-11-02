import React from "react";

//** Components */
import SlideComponent from "@commonComponents/Slide";
import ProductModules from "@moduleComponents/Products";

export default function Home() {
    return (
        <main className="min-h-screen">
            <SlideComponent />
            <ProductModules />
        </main>
    );
}
