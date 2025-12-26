import { useState } from "react";
import { useTranslations } from "next-intl";
import { IconName } from "@/components/icons/Icons";

export default function useLoginPasswordFormInput() {
  const t = useTranslations();
  const eyeOn: IconName = "eyeOn";
  const [eye, setEye] = useState<IconName>(eyeOn);

  function switchEye() {
    setEye(eye === eyeOn ? "eyeOff" : eyeOn);
  }

  return { eye, eyeOn, t, switchEye };
}
