import React from "react";

//** Components */
import ButtonModules from "@moduleComponents/Button";
import InputModules from "@moduleComponents/Input";
import SearchModule from "@moduleComponents/Search";

export default function Examples() {
    return (
        <div className="p-4">
            <ButtonModules />
            <InputModules />
            <SearchModule />
        </div>
    );
}
