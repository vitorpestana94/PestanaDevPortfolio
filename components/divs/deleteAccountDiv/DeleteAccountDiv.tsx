import ReasonsToNotDelete from "@/components/paragraphs/DeleteAccountParagraph";
import Interface from "./DeleteAccountDivInterface";
import ImSure from "@/components/buttons/ImSureCheckButton";
import { useTranslations } from "next-intl";

export default function DeleteAccountDiv({
   deleteConfirmationWasNotClicked,
   handleDeleteClick,
}: Interface) {
   const t = useTranslations("user.deleteAccount");

   return (
      <div className="flex flex-col gap-y-8 items-center">
         <p className="text-white font-medium text-center text-[0.5rem] sm:text-[0.625rem] lg:text-[0.75rem] 2xl:text-[0.875rem] 3xl:text-[1rem] whitespace-pre-line">
            {t("areYouSure")}
         </p>
         <div className="flex flex-col items-center gap-y-3 w-full">
            <ReasonsToNotDelete text={t("willHappen.one")} />
            <ReasonsToNotDelete text={t("willHappen.two")} />
            <ReasonsToNotDelete text={t("willHappen.three")} />
         </div>
         <ImSure
            text={t("yes")}
            deleteConfirmationWasNotClicked={deleteConfirmationWasNotClicked}
            handleDeleteClick={handleDeleteClick}
         />
      </div>
   );
}
