import useLocalePath from "@/hooks/useLocalePath";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

export default function useSiteNavigationSpan() {
   const t = useTranslations("home.header");
   const { path } = useLocalePath("authentication");
   const { data: session } = useSession();

   return { t, path, isUserLogged: session?.user };
}
