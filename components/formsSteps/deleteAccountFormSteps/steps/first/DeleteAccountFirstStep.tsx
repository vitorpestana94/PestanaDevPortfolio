import DeleteAccount from "@/components/paragraphs/FormParagraph";
import Wrapper from "@/components/wrappers/FormWrapper";
import Delete from "@/components/buttons/formButton/FormButton";
import useDeleteAccountFirstStep from "./useDeleteAccountFirstStep";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import YouReallyWannaDeleteYourAccount from "@/components/divs/deleteAccountDiv/DeleteAccountDiv";

export default function DeleteAccountFirstStep({ nextStep }: useStepInterface) {
   const { deleteConfirmationWasNotClicked, handleDeleteClick, submit } =
      useDeleteAccountFirstStep({ nextStep });

   return (
      <section className="profileFormDiv">
         <DeleteAccount text="Delete Account" />
         <Wrapper>
            <YouReallyWannaDeleteYourAccount
               deleteConfirmationWasNotClicked={deleteConfirmationWasNotClicked}
               handleDeleteClick={handleDeleteClick}
            />
         </Wrapper>
         <Delete
            isLoading={false}
            buttonLabel={"teste"}
            isFormWithErrors={deleteConfirmationWasNotClicked}
            styles=" w-4/12! lg:w-3/12! max-w-50"
            submit={submit}
         />
      </section>
   );
}
