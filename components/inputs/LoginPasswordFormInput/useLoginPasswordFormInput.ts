import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IconName } from "@/components/icons/Icons";
import useLoginFormError from "@/models/interfaces/UI/useLoginFormError";

export default function useLoginPasswordFormInput({
  setPasswordError,
}: useLoginFormError) {
  const t = useTranslations();
  const eyeOn: IconName = "eyeOn";
  const [eye, setEye] = useState<IconName>(eyeOn);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  function switchEye() {
    setEye(eye === eyeOn ? "eyeOff" : eyeOn);
  }

  function verifyPassword(event: React.FocusEvent<HTMLInputElement, Element>) {
    const password: string = event.target.value;

    setIsPasswordEmpty(!password);
  }

  useEffect(() => {
    setPasswordError!(isPasswordEmpty);
  }, [isPasswordEmpty]);

  return { eye, isPasswordEmpty, eyeOn, t, switchEye, verifyPassword };
}
