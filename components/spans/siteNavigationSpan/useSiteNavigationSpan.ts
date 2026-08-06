import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";
import { usePathname } from "next/navigation";

export default function useSiteNavigationSpan() {
   const pathName = usePathname();
   const t = useTranslations("header");
   const { data: session } = useSession();
   const pathParts: string[] = pathName.split("/")

   return {
      t, 
      flow: pathParts.length === 2 ? pathParts[1] : pathParts[pathParts.length - 1],
      isUserLogged: session?.user,
      userData: {
         user: {
            name: session?.user?.name,
            email: session?.user?.email,
            img: session?.user.image,
         },
      } as UserDataInterface,
   };
}
