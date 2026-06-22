import Interface from "./NameInputInterface";
import Profile from "../../icons/Icons";
import Error from "@/components/errors/error/Error";
import useNameInput from "./useNameInput";

export default function NameInput({
   placeholder,
   setName,
   setIsFormError,
}: Interface) {
   const { isError, verifyName, getErrorMessage } =
      useNameInput(setIsFormError);

   return (
      <div className="flex flex-col w-full gap-y-1">
         <div className="loginInputsDivs">
            <Profile
               iconName="profile"
               className="aspect-square w-4 ml-1 mr-2 lg:w-4.5 strokeAzulPestana lg:ml-2 lg:mr-4"
            />
            <input
               onBlur={(event) => {
                  verifyName(event);
               }}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setName(event.target.value)
               }
               type={"text"}
               required
               placeholder={placeholder}
               className={`mr-6 loginInputs`}
               name="none"
               autoComplete="off"
            />
         </div>
         <Error shouldRender={isError} message={getErrorMessage()} />
      </div>
   );
}
