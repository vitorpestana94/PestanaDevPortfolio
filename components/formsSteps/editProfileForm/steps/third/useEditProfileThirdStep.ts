import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function useEditProfileThirdStep() {
   const t = useTranslations("profile");
   const router = useRouter();

   async function redirect(): Promise<void> {
      router.push("/");
   }

   return { t, redirect };
}
