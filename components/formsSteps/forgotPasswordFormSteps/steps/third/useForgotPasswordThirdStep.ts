import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { FormErrors } from "@/components/formsSteps/signUpFormSteps/steps/third/useSignUpThirdStep";

export default function useForgotPasswordThirdStep() {
   const t = useTranslations("auth.forgotPassword.form.thirdStep");
   const [isFormError, setIsFormError] = useState<FormErrors>({
      nameError: false,
      passwordError: false,
      passwordConfirmationError: false,
   });

   return { t, isFormError, setIsFormError };
}
