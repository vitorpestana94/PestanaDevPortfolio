import useSignUpFormSteps from "./useSignUpFormSteps";
import FirstStep from "./steps/first/SignUpFirstStep";
import SecondStep from "./steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/SignUpThirdStep";
import FourthStep from "./steps/fourth/FourthStep";

export default function SignUpFormSteps() {
   const {
      isLoading,
      step,
      formData,
      setEmail,
      nextStep,
      submitForm,
      setName,
      setPassword,
   } = useSignUpFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     email={formData.email}
                     nextStep={nextStep}
                     setEmail={setEmail}
                  />
               ),
               2: <SecondStep email={formData.email!} nextStep={nextStep} />,
               3: (
                  <ThirdStep
                     isLoading={isLoading}
                     password={formData.password}
                     submitForm={submitForm}
                     setName={setName}
                     setPassword={setPassword}
                  />
               ),
               4: <FourthStep />,
            }[step]
         }
      </div>
   );
}
