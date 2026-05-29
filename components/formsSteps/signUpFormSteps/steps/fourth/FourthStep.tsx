import useFourthStep from "./useFourthStep";
import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/SignUpFormParagraph";
import Home from "@/components/buttons/authButton/AuthButton";

export default function FourthStep({
   isForgotPassword,
   switchBackToLogin,
}: {
   isForgotPassword?: boolean;
   switchBackToLogin?: () => void;
}) {
   const { t, redirect } = useFourthStep(isForgotPassword, switchBackToLogin);

   return (
      <section className="flex flex-col justify-around items-center h-full">
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
