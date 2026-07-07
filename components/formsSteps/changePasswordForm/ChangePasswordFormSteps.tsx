"use client";

import useChangePasswordFormSteps from "./useChangePasswordFormSteps";
import FirstStep from "@components/formsSteps/changePasswordForm/firstStep/ChangePasswordFirstStep";
import SecondStep from "@components/formsSteps/signUpFormSteps/steps/second/SignUpSecondStep";
import ThirdStep from "../finalFormStep/FinalFormStep";

export default function ChangePasswordFormSteps() {
   const {
      t,
      step,
      errors,
      newPassword,
      currentPassword,
      user,
      register,
      handleSubmit,
      nextStep,
      submit,
   } = useChangePasswordFormSteps();

   if (!user) return null;

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     userEmail={user.email}
                     newPassword={newPassword}
                     currentPassword={currentPassword}
                     errors={errors}
                     nextStep={nextStep}
                     register={register}
                     handleSubmit={handleSubmit}
                  />
               ),
               2: (
                  <SecondStep
                     email={user.email}
                     nextStep={handleSubmit(submit)}
                  />
               ),
               3: <ThirdStep title={t("changePassword.finalStep")} />,
            }[step]
         }
      </div>
   );
}
