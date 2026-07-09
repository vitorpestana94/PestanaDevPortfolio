import AuthenticatedPage from "../wrappers/AuthenticatedPage";
import DeleteAccountForm from "@/components/forms/deleteAccountForm/DeleteAccountForm";

export default function DeleteAccountPage() {
   return (
      <AuthenticatedPage>
         <DeleteAccountForm />
      </AuthenticatedPage>
   );
}
