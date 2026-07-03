import useForgotPasswordFormSteps from "./useForgotPasswordFormSteps";
import FirstStep from "./steps/first/ForgotPasswordFirstStep";
import SecondStep from "../signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/ForgotPasswordThirdStep";
import FourthStep from "../signUpFormSteps/steps/fourth/FourthStep";

export default function ForgotPasswordFormSteps() {
   const {
      step,
      isPending,
      email,
      errors,
      newPassword,
      register,
      handleSubmit,
      nextStep,
      submitForm,
   } = useForgotPasswordFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     errors={errors}
                     email={email}
                     register={register}
                     handleSubmit={handleSubmit}
                     nextStep={nextStep}
                  />
               ),
               2: <SecondStep email={email} nextStep={nextStep} />,
               3: (
                  <ThirdStep
                     errors={errors}
                     isLoading={isPending}
                     password={newPassword}
                     register={register}
                     handleSubmit={handleSubmit}
                     submitForm={submitForm}
                  />
               ),
               4: <FourthStep isForgotPassword />,
            }[step]
         }
      </div>
   );
}
