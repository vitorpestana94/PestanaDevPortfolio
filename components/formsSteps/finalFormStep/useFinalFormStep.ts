import { useRouter } from "next/navigation";

export default function useFinalFormStep(redirectCallBack?: () => void) {
   const router = useRouter();

   async function redirect(): Promise<void> {
      router.push("/");

      if (redirectCallBack) {
         redirectCallBack();
      }
   }

   return { redirect };
}
