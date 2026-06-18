import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import { useState } from "react";
import { useEffect } from "react";
import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { signIn } from "next-auth/react";
import { useRedirectTo } from "@/hooks/useRedirectTo";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";
import { forbidden, unauthorized } from "@/utils/strings/getErrorMessage";

type loginFormErros = {
   email: boolean;
   password: boolean;
   invalidCredentials: boolean;
   invalidLoginEndpoint: boolean;
   unexpected: boolean;
   badRequest: boolean;
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
      invalidCredentials: false,
      invalidLoginEndpoint: false,
      unexpected: false,
      badRequest: false,
   });
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const router = useRouter();
   const { redirectTo } = useRedirectTo();
   const t = useTranslations();

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

   function launchInvalidCredentials() {
      setFormErrors((prev) => ({
         ...prev,
         invalidCredentials: true,
         unexpected: false,
         invalidLoginEndpoint: false,
      }));
   }

   function launcForbidden() {
      setFormErrors((prev) => ({
         ...prev,
         invalidLoginEndpoint: true,
         invalidCredentials: false,
         unexpected: false,
      }));
   }

   function launcheUnexpected() {
      setFormErrors((prev) => ({
         ...prev,
         unexpected: true,
         invalidLoginEndpoint: false,
         invalidCredentials: false,
      }));
   }

   function handleRequestError(error: string) {
      switch (error) {
         case unauthorized:
            launchInvalidCredentials();
            break;
         case forbidden:
            launcForbidden();
            break;
         default:
            launcheUnexpected();
            break;
      }
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
         handleRequestError(result?.error ?? "");
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
      isError: formErros.unexpected,
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
