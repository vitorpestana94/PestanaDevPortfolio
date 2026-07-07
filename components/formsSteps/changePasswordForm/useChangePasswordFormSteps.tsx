import useHandleStep from "@/hooks/useStep";
import { useEffect, useState } from "react";
import ChangeUserPasswordRequestDto from "@/models/interfaces/dtos/requests/ChangeUserPasswordRequestDto";
import { useChangePassword } from "@/hooks/api/user/mutations";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

export default function useChangePasswordFormSteps() {
   const t = useTranslations("user");
   const {
      watch,
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ChangeUserPasswordRequestDto>({ mode: "onBlur" });

   const { mutateAsync, isPending, isSuccess } = useChangePassword();
   const newPassword: string = watch("newPassword");
   const currentPassword: string = watch("currentPassword");

   const { step, nextStep } = useHandleStep();

   async function submit(data: ChangeUserPasswordRequestDto): Promise<void> {
      if (isPending) return;

      await mutateAsync(data);
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep();
      }
   }, [isSuccess]);

   return {
      t,
      step,
      newPassword,
      currentPassword,
      errors,
      register,
      handleSubmit,
      nextStep,
      submit,
   };
}
