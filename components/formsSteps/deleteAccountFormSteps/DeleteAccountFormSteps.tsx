import useDeleteAccountFormSteps from "./useDeleteAccountFormSteps";
import FirstStep from "./steps/first/DeleteAccountFirstStep";
import SecondStep from "../signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "../finalFormStep/FinalFormStep";
import PorfileNavigation from "@/components/spans/ProfileNavigationSpan";

export default function DeleteAccountFormSteps({
   email,
   isManualUser,
}: {
   email: string;
   isManualUser: boolean;
}) {
   const { t, step, nextStep, submit, redirectCallBack } =
      useDeleteAccountFormSteps();

   return (
      <div className="formSteps">
         <PorfileNavigation step={step} isManualSignUp={isManualUser} />
         {
            {
               1: <FirstStep userEmail={email} nextStep={nextStep} />,
               2: <SecondStep email={email} nextStep={submit} />,
               3: (
                  <ThirdStep
                     redirectCallBack={redirectCallBack}
                     title={t("lastStep")}
                  />
               ),
            }[step]
         }
      </div>
   );
}
