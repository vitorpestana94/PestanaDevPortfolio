"use client";

import Input from "../inputs/input/Input";
import Contato from "../titles/FooterFormTitle";
import EmailText from "../inputs/HomeTextArea";
import { useTranslations } from "next-intl";
import Enviar from "../buttons/HomeFormButton";

export default function HomeFooterForm() {
  const t = useTranslations("home");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-[35%] flex flex-col items-center sm:items-end gap-y-3"
    >
      <Contato title={t("quartaSessao.form.titulo")} />
      <div className="flex flex-col gap-y-4 items-center sm:items-end w-full">
        <span className="flex flex-col gap-y-0.5 items-center sm:items-end w-full">
          <Input
            props={{
              type: "text",
              name: "name",
              styles: "w-[90%] sm:w-[15%]",
              placeHolder: t("quartaSessao.form.nome"),
            }}
          />
          <Input
            props={{
              type: "text",
              placeHolder: t("quartaSessao.form.email"),
              name: "email",
              styles: "w-[90%] sm:w-[25%]",
            }}
          />
        </span>
        <div className="flex flex-col gap-y-4 w-full items-center sm:items-end">
          <EmailText placeHolder={t("quartaSessao.form.mensagem")} />
          <Enviar label={t("quartaSessao.form.buttonLabel")} />
        </div>
      </div>
    </form>
  );
}
