export default interface EmailInputInterface {
  verifyEmail: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  getErrorMessage: () => string;
  setEmail: (email: string) => void;
  shoudlRenderError: boolean;
  emailInputPlaceHolder: string;
}
