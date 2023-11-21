import {
    useRouter,
    usePathname,
    useParams,
    useSearchParams,
} from "next/navigation";

//** Router */
export const useRouterCustomHook = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();

    return { ...router, pathname, params, searchParams };
};
