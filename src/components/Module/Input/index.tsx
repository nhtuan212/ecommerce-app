"use client";
import React from "react";

//** Components */
import Input from "@/components/Input";

//** Constants */
import { TEXT } from "@/constants/text";
import IconComponent from "@/components/Icons";

export default function InputModules() {
    return (
        <section className="py-4">
            <h1 className="mb-2">
                <b>Input</b>
            </h1>

            <div className="py-2">
                <Input
                    startIcon={<IconComponent icon={"dollar-sign"} />}
                    value={TEXT.INPUT.VALUE}
                    placeholder={TEXT.INPUT.PLACEHOLDER}
                />
            </div>

            <div className="py-2">
                <Input
                    value={TEXT.INPUT.VALUE}
                    placeholder={TEXT.INPUT.PLACEHOLDER}
                />
            </div>

            <div className="py-2">
                <Input
                    disabled
                    value={TEXT.INPUT.VALUE}
                    startIcon={<IconComponent icon={"dollar-sign"} />}
                    placeholder={TEXT.INPUT.PLACEHOLDER}
                />
            </div>
        </section>
    );
}
