import useSignUpFormSteps from "./useSignUpFormSteps";
import FirstStep from "./steps/first/SignUpFirstStep";
import SecondStep from "./steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/SignUpThirdStep";
import FourthStep from "./steps/fourth/FourthStep";

export default function SignUpFormSteps() {
   const {
      email,
      isLoading,
      step,
      password,
      errors,
      register,
      handleSubmit,
      nextStep,
      submitForm,
   } = useSignUpFormSteps();

   return (
      <div className="formSteps">
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
