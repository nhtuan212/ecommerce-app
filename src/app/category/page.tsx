import { redirect } from "next/navigation";
import { ROUTER } from "@/configs/router";

export default function CategoryPage() {
    return redirect(ROUTER.HOME_PAGE);
}
