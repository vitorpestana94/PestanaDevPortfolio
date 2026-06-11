import { useRouter } from "next/navigation";

export default function useFinalFormStep() {
   const router = useRouter();

   async function redirect(): Promise<void> {
      router.push("/");
   }

   return { redirect };
}
