import useEditProfileFormSteps from "./useEditProfileFormSteps";
import FirstStep from "./steps/first/EditProfileFirstStep";
import SecondStep from "./steps/second/EditProfileSecondtStep";
import User from "@/models/interfaces/UI/UserInterface";
import ThirdStep from "./steps/third/EditProfileThirdStep";

export default function EditProfileFormSteps({ user }: User) {
   const {
      step,
      isEmailUpdate,
      isLoadingUpdateRequest,
      name,
      email,
      handleSubmit,
      register,
      submitBeforeNextStep,
      submit,
      nextStep,
   } = useEditProfileFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     isEmailUpdate={isEmailUpdate}
                     name={name}
                     email={email}
                     isSignUpWithPlatform={user.registerType === "Platform"}
                     isLoadingUpdateRequest={isLoadingUpdateRequest}
                     user={user}
                     submit={submit}
                     nextStep={nextStep}
                     register={register}
                     handleSubmit={handleSubmit}
                  />
               ),
               2: (
                  <SecondStep
                     nextStep={submitBeforeNextStep}
                     isEmailUpdate={isEmailUpdate}
                     userEmail={email}
                  />
               ),
               3: <ThirdStep />,
            }[step]
         }
      </div>
   );
}
