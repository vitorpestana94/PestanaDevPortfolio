export default interface AuthButtonInterface {
  buttonLabel: string;
  isFormWithErrors: boolean;
  submit: () => Promise<void>;
}
