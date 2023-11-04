import { useRouter, usePathname } from "next/navigation";

//** Router */
export const useRouterCustomHook = () => {
    const router = useRouter();

    return { ...router };
};

//** Pathname */
export const usePathnameCustomHook = () => {
    const pathname = usePathname();

    return { pathname };
};
