import { useEffect, useState } from "react";

import { FormErrors } from "../../signUpFormSteps/steps/third/useSignUpThirdStep";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";
import { ConfirmationCodeEmailKind } from "@/models/enums/CofirmationCodeEmailKind";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";

export default function useChangePasswordFirstStep({
   userEmail,
   nextStep,
}: { userEmail: string } & useStepInterface) {
   const locale = useLocale();
   const { mutateAsync, isError, isSuccess, isPending } =
      useSendConfirmationCodeEmail();

   const [isFormError, setIsFormError] = useState<FormErrors>({
      nameError: false,
      passwordError: false,
      passwordConfirmationError: false,
   });

   async function submit(): Promise<void> {
      if (isPending) return;

      await mutateAsync({
         clientEmail: userEmail,
         clientLocale: locale,
         confirmationCodeEmailType: ConfirmationCodeEmailKind.CredentialsChange,
      });
   }

   useEffect(() => {
      if (isSuccess) {
         nextStep!();
      }
   }, [isSuccess]);

   return { isFormError, isLoading: isPending, submit, setIsFormError };
}
