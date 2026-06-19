import User from "@/models/interfaces/UI/UserInterface";
import useChangePasswordFormSteps from "./useChangePasswordFormSteps";
import FirstStep from "@components/formsSteps/changePasswordForm/firstStep/ChangePasswordFirstStep";
import SecondStep from "@components/formsSteps/signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "../finalFormStep/FinalFormStep";
import ErrorModal from "@/components/modals/ErrorModal";

export default function ChangePasswordFormSteps({ user }: User) {
   const {
      t,
      step,
      isError,
      request,
      nextStep,
      setNewPassword,
      setCurrentPassword,
      submit,
   } = useChangePasswordFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     request={request}
                     userEmail={user.email}
                     nextStep={nextStep}
                     setNewPassword={setNewPassword}
                     setCurrentPassword={setCurrentPassword}
                  />
               ),
               2: <SecondStep email={user.email} nextStep={submit} />,
               3: <ThirdStep title={t("changePassword.finalStep")} />,
            }[step]
         }
         <ErrorModal isError={isError} />
      </div>
   );
}
