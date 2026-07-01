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
      register,
      errors,
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
               2: <SecondStep email={formData.email} nextStep={nextStep} />,
               3: (
                  <ThirdStep
                     isLoading={isPending}
                     password={formData.newPassword}
                     setPassword={setPassword}
                     nextStep={nextStep}
                     submitForm={submitForm}
                  />
               ),
               4: <FourthStep isForgotPassword />,
            }[step]
         }
      </div>
   );
}
