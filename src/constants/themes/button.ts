import {
    ButtonColors,
    ButtonSizes,
    ButtonVariants,
} from "@typeProps/ButtonTypeProps";

export const BUTTON_COLORS = {
    [ButtonColors.PRIMARY]: "bg-primary text-white",
    [ButtonColors.ERROR]: "bg-error text-white",
    [ButtonColors.SUCCESS]: "bg-success text-white",
};

export const BUTTON_VARIANTS = {
    [ButtonVariants.CONTAINED]: BUTTON_COLORS,

    [ButtonVariants.OUTLINED]: {
        [ButtonColors.PRIMARY]:
            "bg-transparent border border-primary text-primary",
        [ButtonColors.ERROR]: "bg-transparent border border-error text-error",
        [ButtonColors.SUCCESS]:
            "bg-transparent border border-success text-success",
    },
    [ButtonVariants.TEXT]: {
        [ButtonColors.PRIMARY]: "bg-transparent text-primary",
        [ButtonColors.ERROR]: "bg-transparent text-error",
        [ButtonColors.SUCCESS]: "bg-transparent text-success",
    },
};

export const BUTTON_SIZES = {
    [ButtonSizes.LARGE]: "py-3 px-4",
    [ButtonSizes.MEDIUM]: "py-2 px-3",
    [ButtonSizes.SMALL]: "py-1 px-3 text-sm",
};
