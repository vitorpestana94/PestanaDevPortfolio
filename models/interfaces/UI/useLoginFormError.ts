export default interface useLoginFormError {
  setPasswordError?: (isError: boolean) => void;
  setEmailError?: (isError: boolean) => void;
  setInvalidCredentials?: (isError: boolean) => void;
  isInputWithError?: boolean;
}
