import useEditProfileFormSteps from "./useEditProfileFormSteps";
import FirstStep from "./steps/first/EditProfileFirstStep";
import User from "@/models/interfaces/UI/UserInterface";

export default function EditProfileFormSteps({ user }: User) {
   const { step, isEmailUpdate, setIsUpdateEmail, nextStep } =
      useEditProfileFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: (
                  <FirstStep
                     user={user}
                     setIsUpdateEmail={setIsUpdateEmail}
                     nextStep={nextStep}
                  />
               ),
               2: <p>second step</p>,
               3: <p>third step</p>,
            }[step]
         }
      </div>
   );
}
