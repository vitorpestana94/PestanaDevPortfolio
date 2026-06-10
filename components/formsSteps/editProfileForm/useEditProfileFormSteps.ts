import useHandleStep from "@/hooks/useStep";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import { useState, useEffect } from "react";
import { useChangeUserData } from "@/hooks/api/user/mutations";
import { useQueryClient } from "@tanstack/react-query";

export default function useEditProfileFormSteps() {
   const queryClient = useQueryClient();

   const { step, nextStep } = useHandleStep({
      maxSteps: 3,
   });

   const { mutateAsync, isError, isPending, isSuccess } = useChangeUserData();

   const [request, setRequest] = useState<ChangeUserDataRequestDto>({
      email: undefined,
      name: undefined,
   });

   function setEmail(newEmail: string) {
      setRequest((previous) => ({ ...previous, email: newEmail }));
   }

   function setName(newName: string) {
      setRequest((previous) => ({ ...previous, name: newName }));
   }

   async function submit(): Promise<void> {
      if (isPending) return;

      await mutateAsync(request);
   }

   function submitBeforeNextStep() {
      submit();

      nextStep();
   }

   useEffect(() => {
      if (isSuccess) {
         queryClient.invalidateQueries({
            queryKey: ["getUser"],
         });

         nextStep();
      }
   }, [isSuccess]);

   return {
      isLoadingUpdateRequest: isPending,
      isEmailUpdate: request.email !== undefined,
      request,
      step,
      submitBeforeNextStep,
      submit,
      nextStep,
      setEmail,
      setName,
   };
}
