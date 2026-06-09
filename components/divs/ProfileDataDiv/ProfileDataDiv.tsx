import { useTranslations } from "next-intl";
import ProfileData from "./subComponents/DataDiv";
import User from "@/models/interfaces/UI/UserInterface";

export default function ProfileDataDiv({ user }: User) {
   const t = useTranslations("profile");

   return (
      <div className="authForm">
         <div className="w-full flex flex-col gap-y-8 items-center">
            <ProfileData label={t("showData.name")} data={user.name} />
            <ProfileData label={t("showData.email")} data={user.email} />
            <ProfileData
               label={t("showData.signUpType.label")}
               data={
                  user.registerType === "Manual"
                     ? t("showData.signUpType.manual")
                     : t("showData.signUpType.platform")
               }
            />
         </div>
      </div>
   );
}
