import useHandleStep from "@/hooks/useStep";
import { useEffect, useState } from "react";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import { useChangePassword } from "@/hooks/api/user/mutations";

export default function useChangePasswordFormSteps() {
   const { mutateAsync, isError, isPending, isSuccess } = useChangePassword();
   const { step, nextStep } = useHandleStep();
   const [request, setRequest] = useState<ChangeUserPasswordRequestDto>({
      newPassword: "",
      currentPassword: "",
   });

   function setNewPassword(value: string) {
      setRequest((previous) => ({ ...previous, newPassword: value }));
   }

   function setCurrentPassword(value: string) {
      setRequest((previous) => ({ ...previous, currentPassword: value }));
   }

   async function submit(): Promise<void> {
      if (isPending) return;

      await mutateAsync(request);
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep();
      }
   }, [isSuccess]);

   return {
      step,
      request,
      nextStep,
      setNewPassword,
      setCurrentPassword,
      submit,
   };
}
