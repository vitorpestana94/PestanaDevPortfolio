import { useState, useEffect } from "react";
import { useIsEmailRegistered } from "@/hooks/api/signUp/queries";
import { useTranslations } from "next-intl";
import { useSendConfirmationCodeEmail } from "@/hooks/api/email/mutation";
import { useCheckConfirmationCodeEmailAlreadySent } from "@/hooks/api/confirmationCode/queries";
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

  const [
    isConfirmationCodeEmailAlreadySent,
    setIsConfirmationCodeEmailAlreadySent,
  ] = useState<boolean>(false);

  const {
    data: isEmailRegisteredData,
    refetch: getIsEmailRegistered,
    isFetching,
  } = useIsEmailRegistered(email);

  const { mutateAsync, isError, isPending } = useSendConfirmationCodeEmail();

  const {
    data: confirmationCodeAlreadySentData,
    refetch: getConfirmationCodeEmailAlreadySent,
    isFetching: isFetchingConfirmationCodeAlreadySent,
  } = useCheckConfirmationCodeEmailAlreadySent(email!);

  useEffect(() => {
    if (!isFetching && !isFetchingConfirmationCodeAlreadySent) {
      if (isEmailRegisteredData && confirmationCodeAlreadySentData) {
        if (isEmailRegisteredData.isRegistered) {
          setIsEmailAlreadyRegistered(true);
        } else if (
          confirmationCodeAlreadySentData.confirmationCodeAlreadySent
        ) {
          setIsConfirmationCodeEmailAlreadySent(true);
        } else {
          setIsEmailAlreadyRegistered(false);
          setIsConfirmationCodeEmailAlreadySent(false);

          mutateAsync({ clientEmail: email!, clientLocale: locale });

          nextStep!();
        }
      }
    }
  }, [isEmailRegisteredData, confirmationCodeAlreadySentData]);

  async function submit(): Promise<void> {
    if (!email) {
      setIsEmaiLError(true);

      return;
    } else {
      setIsEmaiLError(false);
    }

    await getIsEmailRegistered();

    await getConfirmationCodeEmailAlreadySent();
  }

  return {
    t,
    isEmailError,
    isEmailAlreadyRegistered,
    isConfirmationCodeEmailAlreadySent,
    isLoading: isFetching || isPending,
    setIsEmaiLError,
    submit,
    setIsEmailAlreadyRegistered,
  };
}
