"use client";

import { useTranslations } from "next-intl";
import ProfileData from "./subComponents/DataDiv";
import PorfileNavigation from "@/components/spans/ProfileNavigationSpan";
import UserProfilePicture from "@/components/icons/specificIcons/UserProfilePicture";
import ProviderProfilePicture from "@/components/icons/specificIcons/ProviderProfilePicture";
import useUser from "@/hooks/useUser";

export default function ProfileDataDiv() {
   const t = useTranslations("user");
   const { user, isManualUser } = useUser();

   if (!user) return;

   return (
      <div className="authForm">
         <PorfileNavigation shouldRenderNav isManualSignUp={isManualUser} />
         <div className="w-full flex flex-col gap-y-8 items-center text-xl">
            {user.image ? (
               <ProviderProfilePicture
                  className={"w-[14%]!"}
                  img={user.image}
               />
            ) : (
               <UserProfilePicture
                  userName={user.name!}
                  mainDivClassName="w-[14%]!"
                  isCursorPointer={false}
                  paragraphStyle="text-base! md:text-2xl!"
               />
            )}
            <ProfileData label={t("showData.name")} data={user.name!} />
            <ProfileData label={t("showData.email")} data={user.email!} />
            <ProfileData
               label={t("showData.signUpType.label")}
               className="capitalize"
               data={
                  isManualUser
                     ? t("showData.signUpType.manual")
                     : t("showData.signUpType.platform", {
                          provider: user.provider,
                       })
               }
            />
         </div>
      </div>
   );
}
