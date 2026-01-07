import SendContactEmailRequest from "@/models/interfaces/dtos/requests/SendContactEmailRequest";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSendContactEmail } from "@/hooks/api/email/mutation";
import { useLocale } from "next-intl";

export default function useHomeFooterForm() {
  const locale = useLocale();
  const initial = {
    clientEmail: "",
    clientName: "",
    clientMessage: "",
    clientLocale: locale,
  };
  const [isFormWithError, setIsFormWithError] = useState<boolean>(false);
  const t = useTranslations("home");
  const { mutateAsync, reset, data, isError, isPending, isSuccess } =
    useSendContactEmail();
  const [formData, setFormData] = useState<SendContactEmailRequest>(initial);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;

    if (
      !formData.clientEmail ||
      !formData.clientMessage ||
      !formData.clientName ||
      isFormWithError
    ) {
      setIsFormWithError(true);

      return;
    }

    mutateAsync(formData, {
      onSuccess: () => {
        setFormData(initial);
        target.reset();
      },
    });
  }

  function setClientEmail(email: string) {
    setFormData((previous) => ({ ...previous, clientEmail: email }));
  }

  function setClientName(name: string) {
    setFormData((previous) => ({ ...previous, clientName: name }));
  }

  function setClientMessage(message: string) {
    setFormData((previous) => ({ ...previous, clientMessage: message }));
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        reset();
      }, 5000);
    }
  }, [isSuccess]);

  return {
    t,
    data,
    isError,
    isPending,
    isSuccess,
    isFormWithError,
    setIsFormWithError,
    submit,
    setClientEmail,
    setClientName,
    setClientMessage,
  };
}
