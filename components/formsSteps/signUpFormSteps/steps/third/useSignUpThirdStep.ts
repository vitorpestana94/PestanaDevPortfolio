import { useTranslations } from "next-intl";

export type FormErrors = {
   nameError: boolean;
   passwordError: boolean;
   passwordConfirmationError: boolean;
};

export default function useSignUpThirdStep() {
   const t = useTranslations("auth.sign-up.form.thirdStep");

   return { t };
}
