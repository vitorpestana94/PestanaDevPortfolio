import Icon from "../../icons/Icons";
import Error from "@/components/errors/error/Error";
import usePasswordInput from "./usePasswordInput";
import PasswordInputInterface from "./PasswordInputInterface";

export default function PasswordInput({
   errors,
   password,
   placeholder,
   type,
   style,
   register,
}: PasswordInputInterface) {
   const {
      eye,
      eyeOn,
      requiredError,
      passwordFieldName,
      passwordError,
      defaultPlaceholder,
      switchEye,
      checkPassword,
      blockCopyOrPaste
   } = usePasswordInput(errors, type, password);

   return (
      <div className="flex flex-col gap-y-1.5 w-full">
         <div
            className={`loginInputsDivs flex justify-between items-center px-4 ${style?.mainDiv.className}`}
         >
            <Icon
               iconName="padlock"
               className="aspect-square w-4 ml-1 mr-2 lg:w-4.5 strokeAzulPestana lg:ml-2 lg:mr-4 shrink-0"
            />
            <input
               onCopy={blockCopyOrPaste}
               onPaste={blockCopyOrPaste}
               {...register!(passwordFieldName, {
                  required: requiredError,
                  validate: (value) => checkPassword(value),
               })}
               type={eye === eyeOn ? "password" : "text"}
               placeholder={placeholder ?? defaultPlaceholder}
               className={`loginInputs`}
            />
            <span onClick={() => switchEye()}>
               <Icon
                  iconName={eye}
                  className="aspect-square w-4 lg:w-4.5 strokeAzulPestana mx-1 lg:mx-2 shrink-0 cursor-pointer"
               />
            </span>
         </div>
         <Error shouldRender={!!passwordError} message={passwordError ?? ""} />
      </div>
   );
}
