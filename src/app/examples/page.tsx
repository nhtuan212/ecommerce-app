import React from "react";
import ButtonModules from "@/components/Module/Button";
import InputModules from "@/components/Module/Input";
import CollectionSearch from "@/components/Search";

export default function Examples() {
    return (
        <div className="p-4">
            <ButtonModules />
            <InputModules />
            <CollectionSearch />
        </div>
    );
}
