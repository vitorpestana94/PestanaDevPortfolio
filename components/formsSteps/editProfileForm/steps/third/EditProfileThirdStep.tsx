import useEditProfileThirdStep from "./useEditProfileThirdStep";
import FinalFormStep from "@/components/formsSteps/finalFormStep/FinalFormStep";

export default function EditProfileThirdStep() {
   const { t } = useEditProfileThirdStep();

   return <FinalFormStep title={t("editProfile.edit.lastStepTitle")} />;
}
