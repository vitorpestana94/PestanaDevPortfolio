import Interface from "./EditProfileSecondtStepInterface";
import ConfirmCode from "@/components/formsSteps/signUpFormSteps/steps/second/SignUpSecondStep";
import useEditProfileSecondtStep from "./useEditProfileSecondtStep";

export default function EditProfileSecondtStep({
   userEmail,
   isEmailUpdate,
   nextStep,
}: Interface) {
   useEditProfileSecondtStep({ nextStep, isEmailUpdate });

   if (!isEmailUpdate) return null;

   return <ConfirmCode nextStep={nextStep} email={userEmail!} />;
}
