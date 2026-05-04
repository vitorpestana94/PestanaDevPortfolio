import { useState, useEffect } from "react";
import { useIsEmailRegistered } from "@/hooks/api/signUp/queries";
import { useTranslations } from "next-intl";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";

export default function useSignUpFirstStep(
  nextStep?: () => void,
  email?: string,
) {
  const locale = useLocale();
  const t = useTranslations();
  const [isEmailError, setIsEmaiLError] = useState<boolean>(false);
  const [isEmailAlreadyRegistered, setIsEmailAlreadyRegistered] =
    useState<boolean>(false);
  const { data, refetch, isFetching } = useIsEmailRegistered(email);
  const {
    mutateAsync,
    data: confirmationCodeData,
    isError,
    isPending,
    isSuccess,
  } = useSendConfirmationCodeEmail();

  useEffect(() => {
    if (!isFetching && data) {
      if (data.isRegistered) {
        setIsEmailAlreadyRegistered(true);
      } else {
        setIsEmailAlreadyRegistered(false);
        mutateAsync({ clientEmail: email!, clientLocale: locale });

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
