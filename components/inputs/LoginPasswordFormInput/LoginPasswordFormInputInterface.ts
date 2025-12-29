import useFormError from "@/models/interfaces/UI/useLoginFormError";

export default interface LoginPasswordFormInputInterface extends useFormError {
  setPassword: (password: string) => void;
}
