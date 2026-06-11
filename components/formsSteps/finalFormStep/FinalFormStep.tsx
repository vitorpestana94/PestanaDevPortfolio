import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/SignUpFormParagraph";
import Home from "@/components/buttons/authButton/AuthButton";
import useFinalFormStep from "./useFinalFormStep";

export default function FinalFormStep({ title }: { title: string }) {
   const { redirect } = useFinalFormStep();

   return (
      <section className="formStepfinalDiv">
         <Success text={title} />
         <Check iconName="badgeCheck" className="aspect-square w-5/12" />
         <Home
            buttonLabel={"Home"}
            submit={redirect}
            isFormWithErrors={false}
         />
      </section>
   );
}
