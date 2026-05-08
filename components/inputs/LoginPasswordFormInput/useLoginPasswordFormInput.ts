import { useEffect, useState } from "react";
import useLoginFormError from "@/models/interfaces/UI/useLoginFormError";
import usePasswordProps from "../Common/usePasswordProps";

export default function useLoginPasswordFormInput({
  setPasswordError,
}: useLoginFormError) {
  const { t, eye, eyeOn, switchEye } = usePasswordProps();
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  function verifyPassword(event: React.FocusEvent<HTMLInputElement, Element>) {
    const password: string = event.target.value;

    setIsPasswordEmpty(!password);
  }

  useEffect(() => {
    setPasswordError!(isPasswordEmpty);
  }, [isPasswordEmpty]);

  return { eye, isPasswordEmpty, eyeOn, t, switchEye, verifyPassword };
}
