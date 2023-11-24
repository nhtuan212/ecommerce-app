import React, { Fragment } from "react";
import Button from "../Button";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { dialogTransition } from "./transition";
import { XMarkIcon } from "@heroicons/react/20/solid";

//** Enums */
export enum DialogTransition {
    LEFT_TO_RIGHT = "LeftToRight",
    RIGHT_TO_LEFT = "RightToLeft",
}

//** Interfaces */
interface DialogComponentProps {
    containerClassName?: string;
    dialogClassName?: string;
    show: boolean;
    title?: string;
    children?: React.ReactNode;
    closeIcon?: boolean;
    transition?: DialogTransition;
    onClose: () => {} | void;
}

export default function DialogComponent({
    containerClassName,
    dialogClassName,
    show,
    title,
    children,
    closeIcon = true,
    transition,
    onClose,
}: DialogComponentProps) {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    {...dialogTransition.container()}
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div
                        className={twMerge(
                            "flex min-h-full items-center justify-center text-center",
                            containerClassName,
                        )}
                    >
                        <Transition.Child
                            as={Fragment}
                            {...dialogTransition.effect(
                                transition as DialogTransition,
                            )}
                        >
                            <Dialog.Panel
                                className={twMerge(
                                    "w-full max-w-md bg-white p-6 text-left rounded-md transform overflow-hidden shadow-xl transition-all",
                                    dialogClassName,
                                )}
                            >
                                {closeIcon && (
                                    <Button
                                        className="absolute top-0 right-0 px-4 py-3"
                                        onClick={onClose}
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </Button>
                                )}

                                {title && (
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                )}

                                {children && children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
