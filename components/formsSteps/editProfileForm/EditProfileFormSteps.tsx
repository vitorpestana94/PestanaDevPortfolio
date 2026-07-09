import useEditProfileFormSteps from "./useEditProfileFormSteps";
import FirstStep from "./steps/first/EditProfileFirstStep";
import SecondStep from "./steps/second/EditProfileSecondtStep";
import ThirdStep from "./steps/third/EditProfileThirdStep";
import User from "@/models/interfaces/dtos/SystemUser";
import PorfileNavigation from "@/components/spans/ProfileNavigationSpan";

export default function EditProfileFormSteps({ user }: { user: User }) {
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
         <PorfileNavigation step={step} isManualSignUp />
         {
            {
               1: (
                  <FirstStep
                     isEmailUpdate={isEmailUpdate}
                     name={name}
                     email={email}
                     isSignUpWithPlatform={false}
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
