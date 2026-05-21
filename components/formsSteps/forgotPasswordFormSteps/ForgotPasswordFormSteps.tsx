import useForgotPasswordFormSteps from "./useForgotPasswordFormSteps";
import FirstStep from "./steps/first/ForgotPasswordFirstStep";

export default function ForgotPasswordFormSteps() {
   const { step, formData, nextStep, setEmail, setPassword } =
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
               2: <p>step 2</p>,
               3: <p>step 3</p>,
               4: <p>step 4</p>,
            }[step]
         }
      </div>
   );
}
