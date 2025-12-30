export default interface AuthButtonInterface {
  isLoginFormWithErrors: boolean;
  submit: () => Promise<void>;
}
