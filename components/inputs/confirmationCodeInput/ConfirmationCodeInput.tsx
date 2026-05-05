import Interface from "./ConfirmationCodeInputInterface";
import { ValidationKey } from "@/models/types/ConfirmationCodeTypes";

export default function ConfirmationCodeInput({
  codeKeys,
  refs,
  getRandomDefault,
  handleInputChange,
  handleOnKeyDown,
}: Interface) {
  return (
    <>
      {codeKeys.map((key: ValidationKey) => (
        <input
          key={key}
          ref={refs[key]}
          type="text"
          maxLength={1}
          className={`aspect-74/50 text-white placeholder:text-gray-500 select-none text-center rounded-[5px] bg-gray-800
              w-[20%] text-sm
              sm:w-[84px]`}
          placeholder={getRandomDefault()}
          onChange={(event) => handleInputChange(event, key)}
          onKeyDown={(event) => handleOnKeyDown(event, key)}
        />
      ))}
    </>
  );
}
