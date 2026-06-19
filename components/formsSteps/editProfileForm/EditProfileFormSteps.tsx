import useEditProfileFormSteps from "./useEditProfileFormSteps";
import FirstStep from "./steps/first/EditProfileFirstStep";
import SecondStep from "./steps/second/EditProfileSecondtStep";
import User from "@/models/interfaces/UI/UserInterface";
import ThirdStep from "./steps/third/EditProfileThirdStep";
import ErrorModal from "@/components/modals/ErrorModal";

export default function EditProfileFormSteps({ user }: User) {
   const {
      request,
      step,
      isError,
      isEmailUpdate,
      isLoadingUpdateRequest,
      setEmail,
      submitBeforeNextStep,
      setName,
      submit,
      nextStep,
   } = useEditProfileFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     isSignUpWithPlatform={user.registerType === "Platform"}
                     isLoadingUpdateRequest={isLoadingUpdateRequest}
                     request={request}
                     user={user}
                     submit={submit}
                     nextStep={nextStep}
                     setEmail={setEmail}
                     setName={setName}
                  />
               ),
               2: (
                  <SecondStep
                     nextStep={submitBeforeNextStep}
                     isEmailUpdate={isEmailUpdate}
                     userEmail={request.email}
                  />
               ),
               3: <ThirdStep />,
            }[step]
         }
         <ErrorModal isError={isError} />
      </div>
   );
}
