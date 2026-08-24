import AuthenticatedPage from "../wrappers/AuthenticatedPage";
import DeleteAccountForm from "@/components/forms/deleteAccountForm/DeleteAccountForm";

export default function DeleteAccountPage() {
   return (
      <AuthenticatedPage redirectTo="profile/delete-account">
         <DeleteAccountForm />
      </AuthenticatedPage>
   );
}
