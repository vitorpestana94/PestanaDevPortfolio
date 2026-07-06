import AuthPage from "../wrappers/AuthPage";
import DeleteAccountForm from "@/components/forms/deleteAccountForm/DeleteAccountForm";

export default function DeleteAccount() {
   return (
      <AuthPage>
         <DeleteAccountForm />
      </AuthPage>
   );
}
