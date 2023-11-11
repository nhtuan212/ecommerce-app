import React from "react";

//** Components */
import ButtonModules from "@/components/Module/Button";
import InputModules from "@/components/Module/Input";
import CollectionSearch from "@/components/Layout/Search";

export default function Examples() {
    return (
        <div className="p-4">
            <ButtonModules />
            <InputModules />
            <CollectionSearch />
        </div>
    );
}
