import { useRouter, usePathname, useParams } from "next/navigation";

//** Router */
export const useRouterCustomHook = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    return { ...router, pathname, params };
};
