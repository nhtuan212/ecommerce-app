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

    const createQueryString = ({
        key,
        value,
    }: {
        key: string;
        value: string;
    }) => {
        const queryString = new URLSearchParams(searchParams.toString());
        queryString.set(key, value);

        return `${pathname}?${queryString}`;
    };

    return { router, pathname, params, searchParams, createQueryString };
};
