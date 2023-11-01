import {
    ButtonColors,
    ButtonSizes,
    ButtonVariants,
} from "@typeProps/ButtonTypeProps";

export const BUTTON_COLORS = {
    [ButtonColors.PRIMARY]: `bg-${ButtonColors.PRIMARY} text-white`,
    [ButtonColors.ERROR]: `bg-${ButtonColors.ERROR} text-white`,
    [ButtonColors.SUCCESS]: `bg-${ButtonColors.SUCCESS} text-white`,
};

export const BUTTON_VARIANTS = {
    [ButtonVariants.CONTAINED]: BUTTON_COLORS,

    [ButtonVariants.OUTLINED]: {
        [ButtonColors.PRIMARY]: `bg-transparent border border-${ButtonColors.PRIMARY} text-${ButtonColors.PRIMARY}`,
        [ButtonColors.ERROR]: `bg-transparent border border-${ButtonColors.ERROR} text-${ButtonColors.ERROR}`,
        [ButtonColors.SUCCESS]: `bg-transparent border border-${ButtonColors.SUCCESS} text-${ButtonColors.SUCCESS}`,
    },
    [ButtonVariants.TEXT]: {
        [ButtonColors.PRIMARY]: `bg-transparent text-${ButtonColors.PRIMARY}`,
        [ButtonColors.ERROR]: `bg-transparent text-${ButtonColors.ERROR}`,
        [ButtonColors.SUCCESS]: `bg-transparent text-${ButtonColors.SUCCESS}`,
    },
};

export const BUTTON_SIZES = {
    [ButtonSizes.LARGE]: "py-3 px-4",
    [ButtonSizes.MEDIUM]: "py-2 px-3",
    [ButtonSizes.SMALL]: "py-1 px-3 text-sm",
};
