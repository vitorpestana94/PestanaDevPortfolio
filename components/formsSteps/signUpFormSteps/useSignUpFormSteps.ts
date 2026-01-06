import useHandleStep from "@/hooks/useStep";
import SignUpRequest from "@/models/interfaces/dtos/requests/SignUpRequest";
import { useState } from "react";
export default function useSignUpFormSteps() {
  const [formData, setFormData] = useState<SignUpRequest>({
    email: "",
    name: "",
    password: "",
    deviceId: "",
    picture: "",
  });

  const { step, nextStep, previousStep, setStep } = useHandleStep({
    maxSteps: 5,
  });

  function setEmail(emailProvided: string) {
    setFormData((previous) => ({ ...previous, email: emailProvided }));
  }

  function setPassword(passwordProvided: string) {
    setFormData((previous) => ({ ...previous, password: passwordProvided }));
  }

  function setName(nameProvided: string) {
    setFormData((previous) => ({ ...previous, name: nameProvided }));
  }

  function setPicture(pictureProvided: string) {
    setFormData((previous) => ({ ...previous, picture: pictureProvided }));
  }

  return {
    formData,
    step,
    nextStep,
    previousStep,
    setStep,
    setEmail,
    setPassword,
    setName,
    setPicture,
  };
}
