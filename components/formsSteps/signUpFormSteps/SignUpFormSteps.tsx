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
      formData,
      errors,
      register,
      handleSubmit,
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
                     email={email}
                     errors={errors}
                     handleSubmit={handleSubmit}
                     register={register}
                     nextStep={nextStep}
                     setEmail={setEmail}
                  />
               ),
               2: <SecondStep email={email!} nextStep={nextStep} />,
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
