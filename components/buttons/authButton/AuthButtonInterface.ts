export default interface AuthButtonInterface {
  buttonLabel: string;
  isFormWithErrors: boolean;
  isLoading?: boolean;
  styles?: string;
  submit: () => Promise<void>;
}
