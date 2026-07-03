import Interface from "./NameInputInterface";
import Profile from "../../icons/Icons";
import Error from "@/components/errors/error/Error";
import useNameInput from "./useNameInput";

export default function NameInput({ errors, register }: Interface) {
   const { errorMessage, placeHolder } = useNameInput();

   const nameError: string = errors?.name?.message as string;

   return (
      <div className="flex flex-col w-full gap-y-1">
         <div className="loginInputsDivs">
            <Profile
               iconName="profile"
               className="aspect-square w-4 ml-1 mr-2 lg:w-4.5 strokeAzulPestana lg:ml-2 lg:mr-4"
            />
            <input
               {...register!("name", {
                  required: errorMessage,
               })}
               type={"text"}
               placeholder={placeHolder}
               className={`mr-6 loginInputs`}
               autoComplete="name"
            />
         </div>
         <Error shouldRender={!!nameError} message={nameError ?? ""} />
      </div>
   );
}
