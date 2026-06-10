import useEditProfileThirdStep from "./useEditProfileThirdStep";
import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/SignUpFormParagraph";
import Home from "@/components/buttons/authButton/AuthButton";

export default function EditProfileThirdStep() {
   const { t, redirect } = useEditProfileThirdStep();

   return (
      <section className="formStepfinalDiv">
         <Success text={t("editProfile.edit.lastStepTitle")} />
         <Check iconName="badgeCheck" className="aspect-square w-5/12" />
         <Home
            buttonLabel={"Home"}
            submit={redirect}
            isFormWithErrors={false}
         />
      </section>
   );
}
