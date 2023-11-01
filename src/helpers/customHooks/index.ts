import { useRouter } from "next/navigation";

//** Router */
export const useRouterCustomHook = () => {
    const router = useRouter();

    return { ...router };
};
