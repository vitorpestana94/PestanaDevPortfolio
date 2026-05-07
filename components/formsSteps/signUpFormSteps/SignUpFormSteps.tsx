import useSignUpFormSteps from "./useSignUpFormSteps";
import FirstStep from "./steps/first/SignUpFirstStep";
import SecondStep from "./steps/second/SignUpSecondStep";
import ThirdStep from "./steps/third/SignUpThirdStep";

export default function SignUpFormSteps() {
  const {
    step,
    formData,
    setEmail,
    nextStep,
    previousStep,
    setStep,
    setName,
    setPassword,
  } = useSignUpFormSteps();

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
          2: <SecondStep email={formData.email!} nextStep={nextStep} />,
          3: <ThirdStep setName={setName} setPassword={setPassword} />,
          4: <p>final</p>,
        }[step]
      }
    </div>
  );
}
