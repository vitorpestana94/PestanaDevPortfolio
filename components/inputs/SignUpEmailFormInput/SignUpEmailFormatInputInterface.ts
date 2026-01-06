import IsEmailRegisteredInterface from "@/components/formsSteps/signUpFormSteps/steps/first/EmailRegisteredInterface";

export default interface SignUpEmailFormatInputInterface
  extends IsEmailRegisteredInterface {
  setEmail: (email: string) => void;
}
