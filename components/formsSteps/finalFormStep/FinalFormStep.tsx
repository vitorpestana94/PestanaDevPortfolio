import Success from "@/components/paragraphs/FormParagraph";
import Home from "@/components/buttons/formButton/FormButton";
import useFinalFormStep from "./useFinalFormStep";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
         <DotLottieReact src="/lotties/success.json" className="aspect-square w-5/12" autoplay />
         <Home
            buttonLabel={"Home"}
            submit={redirect}
            isFormWithErrors={false}
         />
      </section>
   );
}
