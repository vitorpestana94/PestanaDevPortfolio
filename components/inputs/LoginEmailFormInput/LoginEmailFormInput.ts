import useFormError from "@/models/interfaces/UI/useLoginFormError";

export default interface LoginEmailFormInputInterface extends useFormError {
  setEmail: (email: string) => void;
  email?: string;
}
