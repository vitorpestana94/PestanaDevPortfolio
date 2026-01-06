import { Dispatch, SetStateAction } from "react";

export default interface IsEmailRegisteredInterface {
  isEmailAlreadyRegistered: boolean;
  isEmailError: boolean;
  setIsEmaiLError: (isError: boolean) => void;
}
