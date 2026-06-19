"use client";

import Input from "../../inputs/homeFooterFormInput/HomeFooterFormInput";
import Contato from "../../titles/FooterFormTitle";
import EmailText from "../../textAreas/HomeTextArea";
import Enviar from "../../buttons/homeFormButton/HomeFormButton";
import useHomeFooterForm from "./useHomeFooterForm";
import EmailSended from "@/components/spans/EmailSendedSpan";
import ReCaptcha from "@components/divs/ReCaptchaDiv";
import Script from "next/script";
import ErrorModal from "@/components/modals/ErrorModal";

export default function HomeFooterForm() {
   const {
      t,
      isError,
      isPending,
      isSuccess,
      isFormWithError,
      setIsFormWithError,
      submit,
      setClientEmail,
      setClientName,
      setClientMessage,
   } = useHomeFooterForm();

   if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
   }

   return (
      <form
         onSubmit={(event) => submit(event)}
         className="relative w-[40%] sm:w-[35%] flex flex-col items-center sm:items-end gap-y-3"
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
               <ReCaptcha
                  styles={{
                     mainDiv: {
                        className: "items-center sm:items-end w-full",
                     },
                     captcha: {
                        className: "sm:text-end px-0!",
                     },
                  }}
               >
                  <Enviar
                     isFormWithErros={isFormWithError}
                     isLoading={isPending}
                     label={t("quartaSessao.form.buttonLabel")}
                  />
               </ReCaptcha>
            </div>
         </div>
         <Script
            strategy="afterInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
         />
         <ErrorModal isError={isError} />
      </form>
   );
}
