import Profile from "../../icons/Icons";
import Error from "@/components/errors/error/Error";
import EmailInputInterface from "./EmailInputIntertace";
import { emailValidationPattern } from "@/utils/strings/verifyEmailFormat";
import { useTranslations } from "next-intl";

export default function EmailInput({
   register,
   errors,
   emailInputPlaceHolder,
}: EmailInputInterface) {
   if (!errors) return;

   const t = useTranslations("");
   const emailError: string = errors.email?.message as string;

   return (
      <div className="flex flex-col w-10/12 gap-y-1.5">
         <div className="loginInputsDivs">
            <Profile
               iconName="profile"
               className="aspect-square w-4 strokeAzulPestana mr-2"
            />
            <input
               {...register!("email", {
                  required: t("auth.login.form.errors.email"),
                  pattern: {
                     value: emailValidationPattern,
                     message: t("auth.login.form.errors.emailFormat"),
                  },
               })}
               type={"email"}
               placeholder={emailInputPlaceHolder}
               className={`mr-6 loginInputs`}
               autoComplete={"username"}
            />
         </div>
         <Error shouldRender={!!emailError} message={emailError ?? ""} />
      </div>
   );
}
