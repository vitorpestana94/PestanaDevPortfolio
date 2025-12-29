import LoginRequest from "@/models/interfaces/dtos/requests/LoginRequest";
import { useState } from "react";
import { useEffect } from "react";
import isEmailValid from "@/utils/strings/verifyEmailFormat";
import { signIn } from "next-auth/react";
import { useRedirectTo } from "@/hooks/useRedirectTo";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type loginFormErros = {
  email: boolean;
  password: boolean;
  invalidCredentials: boolean;
};

export default function useLoginInputsDiv() {
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [formErros, setFormErrors] = useState<loginFormErros>({
    email: false,
    password: false,
    invalidCredentials: false,
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const { redirectTo } = useRedirectTo(searchParams, router, pathName);

  useEffect(() => {
    if (formErros.email) {
      setEmailError(
        loginRequest.email ? true : false || isEmailValid(loginRequest.email)
      );
    }
  }, [formErros.email]);

  function validateForm(): boolean {
    const nextErrors = {
      email: !loginRequest.email || !isEmailValid(loginRequest.email),
      password: !loginRequest.password,
      invalidCredentials: false,
    };

    setFormErrors(nextErrors);

    return !nextErrors.email && !nextErrors.password;
  }

  useEffect(() => {
    if (formErros.password) {
      setPasswordError(loginRequest.password ? true : false);
    }
  }, [formErros.password]);

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
    if (!validateForm()) return;
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

  return {
    loginRequest,
    formErros,
    submit,
    validateForm,
    setEmail,
    setPassword,
    setEmailError,
    setPasswordError,
    setInvalidCredentialsError,
  };
}
