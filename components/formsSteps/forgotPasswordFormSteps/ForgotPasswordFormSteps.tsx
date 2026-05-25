import useForgotPasswordFormSteps from "./useForgotPasswordFormSteps";
import FirstStep from "./steps/first/ForgotPasswordFirstStep";
import SecondStep from "../signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/ForgotPasswordThirdStep";

export default function ForgotPasswordFormSteps() {
   const { step, formData, nextStep, setEmail, setPassword, submitForm } =
      useForgotPasswordFormSteps();

   return (
      <div className="w-full flex-1 flex flex-col justify-center items-center">
         {
            {
               1: (
                  <FirstStep
                     email={formData.email}
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
               4: <p>step 4</p>,
            }[step]
         }
      </div>
   );
}
