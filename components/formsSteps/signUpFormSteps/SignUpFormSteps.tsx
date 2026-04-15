import useSignUpFormSteps from "./useSignUpFormSteps";
import FirstStep from "./steps/first/SignUpFirstStep";
import SecondStep from "./steps/second/SignUpSecondStep";

export default function SignUpFormSteps() {
  const { step, formData, setEmail, nextStep, previousStep, setStep } =
    useSignUpFormSteps();

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
          2: <SecondStep />,
          3: <p>nome foto</p>,
          4: <p>senha</p>,
          5: <p>final</p>,
        }[step]
      }
    </div>
  );
}
