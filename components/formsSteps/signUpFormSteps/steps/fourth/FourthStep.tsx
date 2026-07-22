import useFourthStep from "./useFourthStep";
import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/FormParagraph";
import Home from "@/components/buttons/formButton/FormButton";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function FourthStep({
   isForgotPassword,
}: {
   isForgotPassword?: boolean;
}) {
   const { t, redirect } = useFourthStep(isForgotPassword);

   return (
      <section className="formStepfinalDiv">
         <Success text={t("title")} />
         <DotLottieReact src="/lotties/success.json" className="aspect-square w-6/12 xl:w-8/12" autoplay />
         <Home
            buttonLabel={isForgotPassword ? t("button") : "Home"}
            submit={redirect}
            isFormWithErrors={false}
         />
      </section>
   );
}
