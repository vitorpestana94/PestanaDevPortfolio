import Icon from "../../icons/Icons";
import LoginPasswordFormInputInterface from "./LoginPasswordFormInputInterface";
import Error from "@/components/errors/error/Error";
import usePasswordProps from "../Common/usePasswordProps";

export default function LoginPasswordFormInput({
   register,
   errors,
}: LoginPasswordFormInputInterface) {
   const { t, eye, eyeOn, switchEye } = usePasswordProps();

   const passwordError: string = errors?.password?.message as string;

   return (
      <div className="flex flex-col items-center gap-y-1.5 w-full">
         <div className="loginInputsDivs flex justify-between items-center px-4 w-10/12">
            <Icon
               iconName="padlock"
               className="aspect-square w-[10%] max-w-4 shrink-0 strokeAzulPestana"
            />
            <input
               {...register!("password", {
                  required: t("auth.login.form.errors.password"),
               })}
               type={eye === eyeOn ? "password" : "text"}
               placeholder={t("auth.login.form.password")}
               className={`loginInputs mx-2`}
               autoComplete={"current-password"}
            />
            <span onClick={() => switchEye()}>
               <Icon
                  iconName={eye}
                  className="aspect-square w-4 shrink-0 strokeAzulPestana cursor-pointer"
               />
            </span>
         </div>
         <Error shouldRender={!!passwordError} message={passwordError ?? ""} />
      </div>
   );
}
