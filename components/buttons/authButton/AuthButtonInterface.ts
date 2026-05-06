export default interface AuthButtonInterface {
  buttonLabel: string;
  isFormWithErrors: boolean;
  isLoading?: boolean;
  submit: () => Promise<void>;
}
