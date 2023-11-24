"use client";
import React from "react";
import Input from "@/components/Input";
import { TEXT } from "@/constants/text";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function InputModules() {
    return (
        <section className="py-4">
            <h1 className="mb-2">
                <b>Input</b>
            </h1>

            <div className="py-2">
                <Input
                    startIcon={<CurrencyDollarIcon className="w-5 h-5" />}
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
                    startIcon={<CurrencyDollarIcon className="w-5 h-5" />}
                    placeholder={TEXT.INPUT.PLACEHOLDER}
                />
            </div>
        </section>
    );
}
