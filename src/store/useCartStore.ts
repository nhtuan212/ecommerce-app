import { create } from "zustand";

interface CartState {
    quantity: number;
    decrease: (by: number) => void;
    increase: (by: number) => void;
}

export const useCartStore = create<CartState>(set => ({
    quantity: 1,
    increase: by => set(state => ({ quantity: state.quantity + by })),
    decrease: by =>
        set(
            prev => ({
                quantity: prev.quantity > 1 ? prev.quantity - by : 1,
            }),
            false,
        ),
}));

/**
 * use devtools(persist(...)) if want to handle with local storage
 * yarn add @redux-devtools/extension --dev // required for devtools typing
 * import type {} from "@redux-devtools/extension";
 */
