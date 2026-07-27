import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { getCaptchaToken } from "@/utils/captcha/getCaptchaToken";
import useAuthErros from "@/hooks/useRequestErros";
import { toastError, toastLoading, toastDimiss } from "@/utils/errors/toastHandlers";
import { useForm } from "react-hook-form";
import { useRedirectTo } from "@/hooks/useRedirectTo";
import { useRouter } from "next/navigation";

export default function useLoginInputsDiv() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginRequest>({ mode: "onBlur" });

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

   async function submit(data: LoginRequest) {
      const captchaToken = await getCaptchaToken();
      if (!captchaToken) throw Error("Captcha token is null or empty");

      if (isLoading) {
         return;
      }

      setIsLoading(true);
      toastLoading(t("loading"));

      const result = await signIn("credentials", {
         email: data.email,
         password: data.password,
         captchaToken: captchaToken,
         redirect: false,
      });
      
      setIsLoading(false);
      toastDimiss();
      
      if (result?.ok) {
         router.push(redirectTo);
      } else {
         handleRequestError(result?.error ?? "500");
      }
   }

   return {
      errors,
      isLoading,
      t,
      register,
      handleSubmit,
      submit,
   };
}
