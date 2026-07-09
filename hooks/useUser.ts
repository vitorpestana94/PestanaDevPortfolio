import { useSession } from "next-auth/react";

export default function useUser() {
   const { data } = useSession();

   return { user: data?.user, isManualUser: data?.user.provider === undefined };
}
