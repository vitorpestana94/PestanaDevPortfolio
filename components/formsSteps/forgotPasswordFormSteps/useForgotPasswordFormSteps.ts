import useHandleStep from "@/hooks/useStep";
import { useEffect } from "react";
import ForgotPasswordRequest from "@/models/interfaces/dtos/requests/ForgotPasswordRequest";
import { useForgotPassword } from "@/hooks/api/forgotPassword/mutation";
import { useForm } from "react-hook-form";

export default function useForgotPasswordFormSteps() {
   const { mutateAsync, isPending, isSuccess } = useForgotPassword();
   const {
      watch,
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ForgotPasswordRequest>({
      mode: "onBlur",
      reValidateMode: "onBlur",
   });

   const email = watch("email");
   const newPassword = watch("newPassword");

   const { step, nextStep } = useHandleStep({
      maxSteps: 4,
   });

   async function submitForm(data: ForgotPasswordRequest) {
      if (isPending) return;

      await mutateAsync(data);
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep();
      }
   }, [isSuccess]);

   return {
      newPassword,
      email,
      step,
      isPending,
      errors,
      register,
      handleSubmit,
      nextStep,
      submitForm,
   };
}
