import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useGetManualUser() {
   const { data } = useSession();
   const router = useRouter();

   useEffect(() => {
      if (data?.user.provider) {
         router.replace("/");
      }
   }, [data, router]);

   return { user: data?.user };
}
