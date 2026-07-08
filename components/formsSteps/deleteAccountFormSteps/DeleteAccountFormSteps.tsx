import User from "@/models/interfaces/UI/UserInterface";
import useDeleteAccountFormSteps from "./useDeleteAccountFormSteps";
import FirstStep from "./steps/first/DeleteAccountFirstStep";
import SecondStep from "../signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "../finalFormStep/FinalFormStep";
import PorfileNavigation from "@/components/spans/ProfileNavigationSpan";

export default function DeleteAccountFormSteps({ user }: User) {
   const { t, step, nextStep, submit, redirectCallBack } =
      useDeleteAccountFormSteps();

   return (
      <div className="formSteps">
         <PorfileNavigation step={step} user={user} />
         {
            {
               1: <FirstStep userEmail={user.email} nextStep={nextStep} />,
               2: <SecondStep email={user.email} nextStep={submit} />,
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
