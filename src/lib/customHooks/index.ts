import { useRouter, usePathname } from "next/navigation";

//** Router */
export const useRouterCustomHook = () => {
    const router = useRouter();
    const pathname = usePathname();

    return { ...router, pathname };
};
