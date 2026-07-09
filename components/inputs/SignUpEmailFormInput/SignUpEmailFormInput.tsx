import Email from "../emailInput/EmailInput";
import SignUpEmailFormatInputInterface from "./SignUpEmailFormatInputInterface";

export default function SignUpEmailFormInput({
   register,
   errors,
   emailInputPlaceHolder,
}: SignUpEmailFormatInputInterface) {
   return (
      <Email
         register={register}
         errors={errors}
         emailInputPlaceHolder={emailInputPlaceHolder}
      />
   );
}
