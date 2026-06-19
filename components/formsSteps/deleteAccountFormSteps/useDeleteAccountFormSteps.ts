import useHandleStep from "@/hooks/useStep";
import { useDeleteUserAccount } from "@/hooks/api/user/mutations";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";

export default function useDeleteAccountFormSteps() {
   const t = useTranslations("profile.deleteAccount");
   const { step, nextStep } = useHandleStep();
   const { mutateAsync, isError, isPending, isSuccess } =
      useDeleteUserAccount();

   async function submit(): Promise<void> {
      if (isPending) return;

      await mutateAsync();
   }

   function redirectCallBack() {
      const logout = async () => {
         await signOut({
            redirect: false,
         });
      };

      logout();
   }

   useEffect(() => {
      if (!isSuccess) return;

      nextStep();

      const timer = setTimeout(async () => {
         await signOut({
            callbackUrl: "/",
         });
      }, 10000);

      return () => clearTimeout(timer);
   }, [isSuccess]);

   return { t, isError, step, nextStep, submit, signOut, redirectCallBack };
}
