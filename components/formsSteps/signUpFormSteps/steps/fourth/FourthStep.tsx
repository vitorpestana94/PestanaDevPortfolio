import useFourthStep from "./useFourthStep";
import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/FormParagraph";
import Home from "@/components/buttons/formButton/FormButton";

export default function FourthStep({
   isForgotPassword,
}: {
   isForgotPassword?: boolean;
}) {
   const { t, redirect } = useFourthStep(isForgotPassword);

   return (
      <section className="formStepfinalDiv">
         <Success text={t("title")} />
         <Check iconName="badgeCheck" className="aspect-square w-5/12" />
         <Home
            buttonLabel={isForgotPassword ? t("button") : "Home"}
            submit={redirect}
            isFormWithErrors={false}
         />
      </section>
   );
}
