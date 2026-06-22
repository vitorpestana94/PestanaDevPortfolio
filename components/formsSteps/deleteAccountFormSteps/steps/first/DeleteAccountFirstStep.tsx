import DeleteAccount from "@/components/paragraphs/FormParagraph";
import Wrapper from "@/components/wrappers/FormWrapper";
import Delete from "@/components/buttons/formButton/FormButton";
import useDeleteAccountFirstStep from "./useDeleteAccountFirstStep";
import useStepInterface from "@/models/interfaces/UI/useStepInterface";
import YouReallyWannaDeleteYourAccount from "@/components/divs/deleteAccountDiv/DeleteAccountDiv";

export default function DeleteAccountFirstStep({
   userEmail,
   nextStep,
}: useStepInterface & { userEmail: string }) {
   const {
      t,
      deleteConfirmationWasNotClicked,
      isLoading,
      handleDeleteClick,
      submit,
   } = useDeleteAccountFirstStep({ userEmail, nextStep });

   return (
      <section className="profileFormDiv">
         <DeleteAccount text={t("title")} />
         <Wrapper className="flex justify-center items-center">
            <YouReallyWannaDeleteYourAccount
               deleteConfirmationWasNotClicked={deleteConfirmationWasNotClicked}
               handleDeleteClick={handleDeleteClick}
            />
         </Wrapper>
         <Delete
            isLoading={isLoading}
            buttonLabel={t("button")}
            isFormWithErrors={deleteConfirmationWasNotClicked}
            styles=" w-4/12! lg:w-3/12!"
            submit={submit}
         />
      </section>
   );
}
