import { useState, useRef, useEffect } from "react";
import { useCheckConfirmationCode } from "@/hooks/api/confirmationCode/mutation";
import { useTranslations } from "next-intl";
import Inteface from "./SignUpSecondStepInterface";

export default function useSignUpSecondStep({ email, nextStep }: Inteface) {
  const [error, setError] = useState<string>("");
  const t = useTranslations();
  const { mutateAsync, isError, isPending, isSuccess } =
    useCheckConfirmationCode();
  const defaultValue: string = "-1";
  const keys = ["firstCode", "secondCode", "thirdCode", "fourthCode"] as const;

  type ValidationKey = (typeof keys)[number];

  const [validationCode, setValidationCode] = useState<{
    [key: string]: string;
  }>({
    firstCode: defaultValue,
    secondCode: defaultValue,
    thirdCode: defaultValue,
    fourthCode: defaultValue,
  });

  const refs = {
    firstCode: useRef<HTMLInputElement>(null),
    secondCode: useRef<HTMLInputElement>(null),
    thirdCode: useRef<HTMLInputElement>(null),
    fourthCode: useRef<HTMLInputElement>(null),
  };

  function getCurrentKey(key: ValidationKey) {
    return keys.indexOf(key);
  }

  function getValidationCode() {
    return `${validationCode.firstNumber}${validationCode.secondNumber}${validationCode.thirdNumber}${validationCode.fourthNumber}`;
  }

  function setEmptyError() {
    setError("");
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    key: ValidationKey,
  ) {
    const value = event.target.value;

    setValidationCode((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (value) {
      const nextKey = keys[Math.min(getCurrentKey(key) + 1, 3)];

      if (nextKey && refs[nextKey].current) {
        refs[nextKey].current?.focus();
      }
    }
  }

  function focusInput(key: ValidationKey): void {
    refs[key].current?.focus();
  }

  function moveCursorToEnd(key: ValidationKey): void {
    setTimeout(() => {
      refs[key]?.current?.setSelectionRange(1, 1);
    }, 0); // This is used to wait until the keydown event is over.
  }

  function checkIfKeyIfValid(key: ValidationKey): boolean {
    return !!(key && refs[key].current);
  }

  function focusAndMoveCursor(key: ValidationKey) {
    if (checkIfKeyIfValid(key)) {
      focusInput(key);

      moveCursorToEnd(key);
    }
  }

  function getRandomDefault() {
    let random = (Math.random() + 1).toString(36).substring(7);

    return random[0];
  }

  function handleOnKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    key: ValidationKey,
  ) {
    const keyBoardKey = event.key;
    const previousKey = keys[Math.max(getCurrentKey(key) - 1, 0)];

    if (keyBoardKey === "Backspace") {
      if (refs[key].current?.value === "") {
        setTimeout(() => {
          focusAndMoveCursor(previousKey);
        }, 0);
      }
    } else if (keyBoardKey === "ArrowLeft") {
      focusAndMoveCursor(previousKey);
    } else if (keyBoardKey === "ArrowRight") {
      const nextKey = keys[Math.min(getCurrentKey(key) + 1, 3)];

      if (checkIfKeyIfValid(nextKey)) {
        focusInput(nextKey);
      }
    }
  }

  function verifyIfAllNumbersAreSetted(): boolean {
    return Object.values(validationCode).every((code) => code !== defaultValue);
  }

  async function handleButtonClick() {
    if (isPending) {
      return;
    }

    if (verifyIfAllNumbersAreSetted()) {
      const newCode: string = getValidationCode();

      await mutateAsync({
        clientEmail: email,
        code: newCode,
      });
    } else {
      setError(t("error.tokenNotSetted"));
    }
  }

  useEffect(() => {
    if (verifyIfAllNumbersAreSetted()) {
      setEmptyError();
    }
  }, [validationCode]);

  useEffect(() => {
    if (isSuccess) {
      setEmptyError();

      nextStep!();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setError(t("error.wrongToken"));
    } else {
      setEmptyError();
    }
  }, [isError]);

  return {
    refs,
    keys,
    error,
    isError,
    t,
    handleInputChange,
    handleOnKeyDown,
    handleButtonClick,
    getRandomDefault,
  };
}
