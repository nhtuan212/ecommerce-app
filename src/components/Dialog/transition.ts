import { TransitionClasses } from "@headlessui/react";
import { DialogTransition } from ".";

//** Closures */
export const dialogTransition = (() => {
    return {
        container: (): TransitionClasses => {
            return {
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
            };
        },

        effect: (transition: DialogTransition): TransitionClasses => {
            switch (transition) {
                case DialogTransition.LEFT_TO_RIGHT:
                    return {
                        // Do something
                    };
                case DialogTransition.RIGHT_TO_LEFT:
                    return {
                        enter: "transition-all ease-in-out duration-300",
                        enterFrom: "translate-x-full",
                        enterTo: "translate-x-0",
                        leave: "transition-all ease-in-out duration-200",
                        leaveFrom: "translate-x-0",
                        leaveTo: "translate-x-full",
                    };
                default:
                    return {
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                    };
            }
        },
    };
})();
