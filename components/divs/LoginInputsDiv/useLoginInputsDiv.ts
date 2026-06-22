import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import { useState } from "react";
import { useEffect } from "react";
import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { signIn } from "next-auth/react";
import { useRedirectTo } from "@/hooks/useRedirectTo";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";
import useAuthErros from "@/hooks/useRequestErros";
import { toastError } from "@/utils/errors/toastHandlers";
import { getErrorStatusCode } from "@/utils/errors/errorMessagesHandlers";

type loginFormErros = {
   email: boolean;
   password: boolean;
};

export default function useLoginInputsDiv() {
   const [loginRequest, setLoginRequest] = useState<LoginRequest>({
      email: "",
      password: "",
      captchaToken: "",
   });
   const [formErros, setFormErrors] = useState<loginFormErros>({
      email: false,
      password: false,
   });
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const router = useRouter();
   const { redirectTo } = useRedirectTo();
   const t = useTranslations();
   const { handleRequestError } = useAuthErros({
      unauthorized: () => {
         toastError(t("auth.login.form.errors.invalidCredentials"));
      },
      forbidden: () => {
         toastError(t("auth.login.form.errors.invalidLoginEndpoint")); // Only users that registered manually should use this form.
      },
      unexpected: () => {
         toastError("error.unexpected");
      },
   });

   function isFormInputsValids(): boolean {
      return !formErros.email && !formErros.password;
   }

   function isFormInputsEmpty(): boolean {
      return !loginRequest.email || !loginRequest.password;
   }

   function setEmailError(isError: boolean) {
      setFormErrors((previous) => ({ ...previous, email: isError }));
   }

   function setPasswordError(isError: boolean) {
      setFormErrors((previous) => ({ ...previous, email: isError }));
   }

   function setInvalidCredentialsError(isError: boolean) {
      setFormErrors((previous) => ({
         ...previous,
         invalidCredentials: isError,
      }));
   }

   function setEmail(email: string) {
      setLoginRequest((previous) => ({ ...previous, email }));
   }

   function setPassword(password: string) {
      setLoginRequest((previous) => ({ ...previous, password }));
   }

   async function submit() {
      const captchaToken = await getCaptchaToken();

      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (isLoading || !isFormInputsValids() || isFormInputsEmpty()) {
         return;
      }

      setIsLoading(true);

      const result = await signIn("credentials", {
         email: loginRequest.email,
         password: loginRequest.password,
         captchaToken: captchaToken,
         redirect: false,
      });

      if (result?.ok) {
         router.push(redirectTo);
      } else {
         handleRequestError(getErrorStatusCode(result?.error ?? ""));
      }

      setIsLoading(false);
   }

   useEffect(() => {
      if (formErros.email) {
         setEmailError(
            loginRequest.email
               ? true
               : false || isEmailValid(loginRequest.email),
         );
      }
   }, [formErros.email]);

   useEffect(() => {
      if (formErros.password) {
         setPasswordError(loginRequest.password ? true : false);
      }
   }, [formErros.password]);

   return {
      isLoading,
      loginRequest,
      formErros,
      t,
      submit,
      isFormInputsValids,
      setEmail,
      setPassword,
      setEmailError,
      setPasswordError,
      setInvalidCredentialsError,
   };
}
