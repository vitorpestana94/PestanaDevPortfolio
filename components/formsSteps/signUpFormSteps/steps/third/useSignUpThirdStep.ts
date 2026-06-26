import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export type FormErrors = {
   nameError: boolean;
   passwordError: boolean;
   passwordConfirmationError: boolean;
};

export default function useSignUpThirdStep() {
   const [isFormError, setIsFormError] = useState<FormErrors>({
      nameError: false,
      passwordError: false,
      passwordConfirmationError: false,
   });
   const t = useTranslations("auth.sign-up.form.thirdStep");

   return { t, isFormError, setIsFormError };
}
