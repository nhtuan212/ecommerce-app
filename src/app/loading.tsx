import React from "react";
import LoadingIcon from "@/components/Icons/Loading";

export default function loading() {
    return (
        <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-white">
            <LoadingIcon className="w-32 h-32" />
        </div>
    );
}
