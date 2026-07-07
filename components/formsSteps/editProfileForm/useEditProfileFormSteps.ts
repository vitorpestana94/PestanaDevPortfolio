import useHandleStep from "@/hooks/useStep";
import ChangeUserDataRequestDto from "@/models/interfaces/dtos/requests/ChangeUserDataRequestDto";
import { useEffect, useState } from "react";
import { useChangeUserData } from "@/hooks/api/user/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function useEditProfileFormSteps() {
   const queryClient = useQueryClient();
   const {
      watch,
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ChangeUserDataRequestDto>({ mode: "onBlur" });
   const email = watch("email");
   const name = watch("name");

   const { step, nextStep } = useHandleStep({
      maxSteps: 3,
   });

   const { mutateAsync, isPending, isSuccess } = useChangeUserData();

   async function submit(data: ChangeUserDataRequestDto): Promise<void> {
      if (isPending) return;

      await mutateAsync(data);
   }

   function submitBeforeNextStep() {
      submit({ email: email, name: name });

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
      isEmailUpdate: email !== undefined && email !== "",
      step,
      errors,
      name,
      email,
      register,
      handleSubmit,
      submitBeforeNextStep,
      submit,
      nextStep,
   };
}
