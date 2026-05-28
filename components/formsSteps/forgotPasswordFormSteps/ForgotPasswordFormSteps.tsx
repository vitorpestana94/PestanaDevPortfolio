import useForgotPasswordFormSteps from "./useForgotPasswordFormSteps";
import FirstStep from "./steps/first/ForgotPasswordFirstStep";
import SecondStep from "../signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/ForgotPasswordThirdStep";
import FourthStep from "../signUpFormSteps/steps/fourth/FourthStep";
import Interface from "@/components/forms/forgotPasswordForm/ForgotPasswordFormInterface";

export default function ForgotPasswordFormSteps({
   switchBackToLogin,
}: Interface) {
   const { step, formData, nextStep, setEmail, setPassword, submitForm } =
      useForgotPasswordFormSteps();

   return (
      <div className="w-full flex-1 flex flex-col justify-center items-center">
         {
            {
               1: (
                  <FirstStep
                     email={formData.email}
                     switchBackToLogin={switchBackToLogin}
                     nextStep={nextStep}
                     setEmail={setEmail}
                  />
               ),
               2: <SecondStep email={formData.email} nextStep={nextStep} />,
               3: (
                  <ThirdStep
                     isLoading={false}
                     password={formData.newPassword}
                     setPassword={setPassword}
                     nextStep={nextStep}
                     submitForm={submitForm}
                  />
               ),
               4: <FourthStep />,
            }[step]
         }
      </div>
   );
}
