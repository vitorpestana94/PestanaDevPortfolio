import useSignUpFormSteps from "./useSignUpFormSteps";
import FirstStep from "./steps/first/SignUpFirstStep";
import SecondStep from "./steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/SignUpThirdStep";
import FourthStep from "./steps/fourth/FourthStep";
import LoginSignUpSwitch from "@/components/buttons/switchAutoButton/SwitchAutoButton";

export default function SignUpFormSteps() {
   const {
      email,
      isLoading,
      step,
      password,
      errors,
      accepted,
      register,
      handleSubmit,
      nextStep,
      submitForm,
   } = useSignUpFormSteps();

   return (
      <div className="formSteps">
         <LoginSignUpSwitch hide={step !== 1} />
         {
            {
               1: (
                  <FirstStep
                     email={email}
                     errors={errors}
                     handleSubmit={handleSubmit}
                     register={register}
                     nextStep={nextStep}
                  />
               ),
               2: <SecondStep email={email!} nextStep={nextStep} />,
               3: (
                  <ThirdStep
                     accepted={accepted ?? false}
                     isLoading={isLoading}
                     password={password}
                     errors={errors}
                     register={register}
                     handleSubmit={handleSubmit}
                     submitForm={submitForm}
                  />
               ),
               4: <FourthStep />,
            }[step]
         }
      </div>
   );
}
