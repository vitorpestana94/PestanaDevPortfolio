import Password from "@/components/inputs/PasswordInput/PasswordInput";
import Interface from "./ChangePasswordFirstStepInterface";
import useChangePasswordFirstStep from "./useChangePasswordFirstStep";
import Register from "@/components/buttons/authButton/AuthButton";

export default function ChangePasswordFirstStep({
   request,
   userEmail,
   nextStep,
   setCurrentPassword,
   setNewPassword,
}: Interface) {
   const { isFormError, isLoading, setIsFormError, submit } =
      useChangePasswordFirstStep({
         userEmail,
         nextStep,
      });

   return (
      <section className="flex flex-col flex-1 justify-around items-center w-full">
         <div className="flex flex-col justify-center items-center gap-y-4 w-1/2 ">
            <Password
               placeholder="Provide your current password"
               password={request.currentPassword}
               setPassword={setCurrentPassword}
               setIsFormError={setIsFormError}
            />
            <Password
               placeholder="Define a new password"
               password={request.newPassword}
               setPassword={setNewPassword}
               setIsFormError={setIsFormError}
            />
            <Password
               isPasswordConfirmation
               placeholder="Confirm your new password"
               password={request.newPassword}
               setPassword={setNewPassword}
               setIsFormError={setIsFormError}
            />
         </div>
         <Register
            isLoading={isLoading}
            buttonLabel={"teste"}
            isFormWithErrors={
               isFormError.passwordConfirmationError ||
               isFormError.passwordError
            }
            styles=" w-4/12! lg:w-3/12! max-w-50"
            submit={submit}
         />
      </section>
   );
}
