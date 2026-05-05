import {
  keys,
  ValidationKey,
  ValidationRefs,
} from "@/models/types/ConfirmationCodeTypes";

export default interface ConfirmationCodeInputInterface {
  codeKeys: typeof keys;
  refs: ValidationRefs;
  getRandomDefault(): string;
  handleOnKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    key: ValidationKey,
  ): void;
  handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    key: ValidationKey,
  ): void;
}
