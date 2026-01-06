import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import { useState } from "react";
import { useEffect } from "react";
import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { signIn } from "next-auth/react";
import { useRedirectTo } from "@/hooks/useRedirectTo";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type loginFormErros = {
  email: boolean;
  password: boolean;
  invalidCredentials: boolean;
};

export default function useLoginInputsDiv() {
  // #region Declarations
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [formErros, setFormErrors] = useState<loginFormErros>({
    email: false,
    password: false,
    invalidCredentials: false,
  });
  const router = useRouter();
  const { redirectTo } = useRedirectTo();
  const t = useTranslations();
  // #endregion

  // #region Functions
  function isFormInputsValids(): boolean {
    return (
      !formErros.email && !formErros.password && !formErros.invalidCredentials
    );
  }

  function setEmailError(isError: boolean) {
    setFormErrors((previous) => ({ ...previous, email: isError }));
  }

  function setPasswordError(isError: boolean) {
    setFormErrors((previous) => ({ ...previous, email: isError }));
  }

  function setInvalidCredentialsError(isError: boolean) {
    setFormErrors((previous) => ({ ...previous, invalidCredentials: isError }));
  }

  function setEmail(email: string) {
    setLoginRequest((previous) => ({ ...previous, email }));
  }

  function setPassword(password: string) {
    setLoginRequest((previous) => ({ ...previous, password }));
  }

  async function submit() {
    if (!isFormInputsValids()) return;

    const result = await signIn("credentials", {
      email: loginRequest.email,
      password: loginRequest.password,
      redirect: false,
    });

    if (result?.ok) {
      router.push(redirectTo);
    } else {
      setFormErrors((prev) => ({ ...prev, invalidCredentials: true }));
    }
  }
  // #endregion

  // #region useEffects
  useEffect(() => {
    if (formErros.email) {
      setEmailError(
        loginRequest.email ? true : false || isEmailValid(loginRequest.email)
      );
    }
  }, [formErros.email]);

  useEffect(() => {
    if (formErros.password) {
      setPasswordError(loginRequest.password ? true : false);
    }
  }, [formErros.password]);
  // #endregion

  return {
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
