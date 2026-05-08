import { FocusEvent } from "react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { FormErrors } from "@/components/formsSteps/signUpFormSteps/steps/third/useSignUpThirdStep";

export default function useNameInput(
  setIsFormError: Dispatch<SetStateAction<FormErrors>>,
) {
  const [isError, setIsError] = useState<boolean>(false);
  const t = useTranslations("auth.signUp.form.thirdStep.error");

  function verifyName(event: FocusEvent<HTMLInputElement, Element>) {
    const name = event.currentTarget.value;

    setIsError(!name);
  }

  function getErrorMessage() {
    let errorMessage: string = "";

    if (isError) {
      errorMessage = t("name");
    }

    return errorMessage;
  }

  useEffect(() => {
    setIsFormError((previous) => ({ ...previous, nameError: isError }));
  }, [isError]);

  return { isError, verifyName, getErrorMessage };
}
