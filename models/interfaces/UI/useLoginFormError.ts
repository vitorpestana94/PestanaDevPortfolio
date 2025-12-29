export default interface useLoginFormError {
  setIsPasswordError?: (isError: boolean) => void;
  setIsEmailError?: (isError: boolean) => void;
  setIsInvalidCredentials?: (isError: boolean) => void;
  isInputWithError?: boolean;
}
