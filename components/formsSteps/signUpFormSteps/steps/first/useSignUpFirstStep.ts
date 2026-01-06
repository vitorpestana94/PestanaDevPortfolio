import { useState, useEffect } from "react";
import { useIsEmailRegistered } from "@/hooks/api/signUp/queries";
import { useTranslations } from "next-intl";

export default function useSignUpFirstStep(
  nextStep?: () => void,
  email?: string
) {
  const [isEmailError, setIsEmaiLError] = useState<boolean>(false);
  const [isEmailAlreadyRegistered, setIsEmailAlreadyRegistered] =
    useState<boolean>(false);
  const { data, refetch, isFetching } = useIsEmailRegistered(email);
  const t = useTranslations();

  useEffect(() => {
    if (!isFetching && data) {
      if (data.isRegistered) {
        setIsEmailAlreadyRegistered(true);
      } else {
        setIsEmailAlreadyRegistered(false);
        nextStep!();
      }
    }
  }, [data]);

  async function submit(): Promise<void> {
    refetch();
  }

  return {
    t,
    isEmailError,
    setIsEmaiLError,
    submit,
    isEmailAlreadyRegistered,
    data,
    isFetching,
    refetch,
    setIsEmailAlreadyRegistered,
  };
}
