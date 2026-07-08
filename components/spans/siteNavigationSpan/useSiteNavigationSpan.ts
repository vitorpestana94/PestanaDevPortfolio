import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";

export default function useSiteNavigationSpan() {
   const t = useTranslations("home.header");
   const { data: session } = useSession();

   return {
      t,
      isUserLogged: session?.user,
      userData: {
         user: { name: session?.user?.name, email: session?.user?.email },
      } as UserDataInterface,
   };
}
