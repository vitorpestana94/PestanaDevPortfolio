import User from "@/models/interfaces/UI/UserInterface";
import useDeleteAccountFormSteps from "./useDeleteAccountFormSteps";
import DeleteAccountFirstStep from "./steps/first/DeleteAccountFirstStep";

export default function DeleteAccountFormSteps({ user }: User) {
   const { step, nextStep } = useDeleteAccountFormSteps();

   return (
      <div className="formSteps">
         {
            {
               1: <DeleteAccountFirstStep nextStep={nextStep} />,
               2: <p>oi</p>,
               3: <p>oi</p>,
            }[step]
         }
      </div>
   );
}
