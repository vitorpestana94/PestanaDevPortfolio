"use client";

import Input from "../../inputs/homeFooterFormInput/HomeFooterFormInput";
import Contato from "../../titles/FooterFormTitle";
import EmailText from "../../textAreas/HomeTextArea";
import Enviar from "../../buttons/homeFormButton/HomeFormButton";
import useHomeFooterForm from "./useHomeFooterForm";
import EmailSended from "@/components/spans/EmailSendedSpan";

export default function HomeFooterForm() {
  const {
    t,
    isPending,
    isSuccess,
    isFormWithError,
    setIsFormWithError,
    submit,
    setClientEmail,
    setClientName,
    setClientMessage,
  } = useHomeFooterForm();

  return (
    <form
      onSubmit={(event) => submit(event)}
      className="relative w-[35%] flex flex-col items-center sm:items-end gap-y-3"
    >
      {isSuccess && <EmailSended />}
      <Contato title={t("quartaSessao.form.titulo")} />
      <div className="flex flex-col gap-y-4 items-center sm:items-end w-full">
        <span className="flex flex-col gap-y-0.5 items-center sm:items-end w-full">
          <Input
            props={{
              type: "text",
              name: "name",
              styles: "w-[90%] sm:w-[15%]",
              placeHolder: t("quartaSessao.form.nome"),
              setIsFormWithError: setIsFormWithError,
              setFormData: setClientName,
            }}
          />
          <Input
            props={{
              type: "text",
              placeHolder: t("quartaSessao.form.email"),
              name: "email",
              styles: "w-[90%] sm:w-[25%]",
              setIsFormWithError: setIsFormWithError,
              setFormData: setClientEmail,
            }}
          />
        </span>
        <div className="flex flex-col gap-y-4 w-full items-center sm:items-end">
          <EmailText
            setIsFormWithError={setIsFormWithError}
            setFormData={setClientMessage}
            placeHolder={t("quartaSessao.form.mensagem")}
          />
          <Enviar
            isFormWithErros={isFormWithError}
            isLoading={isPending}
            label={t("quartaSessao.form.buttonLabel")}
          />
        </div>
      </div>
    </form>
  );
}
