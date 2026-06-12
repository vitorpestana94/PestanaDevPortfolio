import Check from "@/components/icons/Icons";
import Success from "@/components/paragraphs/FormParagraph";
import Home from "@/components/buttons/formButton/FormButton";
import useFinalFormStep from "./useFinalFormStep";

export default function FinalFormStep({
   redirectCallBack,
   title,
}: {
   title: string;
   redirectCallBack?: () => void;
}) {
   const { redirect } = useFinalFormStep(redirectCallBack);

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
