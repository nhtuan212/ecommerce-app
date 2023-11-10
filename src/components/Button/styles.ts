//** Constants */
import { ButtonColors } from "@/constants/enums/eButton";

export const ButtonStyles = {
    Button: "inline-flex items-center py-1.5 px-2.5 rounded-md active:animate-press disabled:opacity-50 disabled:pointer-events-none",
    Color: {
        [ButtonColors.Primary]: "bg-primary text-white",
        [ButtonColors.Error]: "bg-error text-white",
        [ButtonColors.Success]: "bg-success text-white",
    },
    Outline: {
        [ButtonColors.Primary]:
            "bg-transparent border border-primary text-primary",
        [ButtonColors.Error]: "bg-transparent border border-error text-error",
        [ButtonColors.Success]:
            "bg-transparent border border-success text-success",
    },
};
