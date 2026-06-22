import Icon from "../../icons/Icons";
import Error from "@/components/errors/error/Error";
import usePasswordInput from "./usePasswordInput";
import PasswordInputInterface from "./PasswordInputInterface";

export default function PasswordInput({
   errorMessage,
   password,
   placeholder,
   style,
   isCurrentPasswordInput,
   isPasswordConfirmation,
   setPassword,
   setIsFormError,
}: PasswordInputInterface) {
   const {
      isPasswordError,
      eye,
      eyeOn,
      switchEye,
      verifyPassword,
      getErrorMessage,
      verifyPasswordConfirmation,
      getPlaceholder,
   } = usePasswordInput(
      setIsFormError,
      isPasswordConfirmation ?? false,
      password,
      isCurrentPasswordInput,
   );

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
               onBlur={(event) => {
                  isPasswordConfirmation
                     ? verifyPasswordConfirmation(event)
                     : verifyPassword(event);
               }}
               type={eye === eyeOn ? "password" : "text"}
               placeholder={placeholder ?? getPlaceholder()}
               className={`loginInputs`}
               required
               name="nope"
               autoComplete="new-password"
               onChange={(event) =>
                  isPasswordConfirmation ? {} : setPassword(event.target.value)
               }
            />
            <span onClick={() => switchEye()}>
               <Icon
                  iconName={eye}
                  className="aspect-square w-4 lg:w-4.5 strokeAzulPestana mx-1 lg:mx-2 shrink-0 strokeAzulPestana cursor-pointer"
               />
            </span>
         </div>
         <Error
            shouldRender={isPasswordError}
            message={errorMessage ?? getErrorMessage()}
         />
      </div>
   );
}
