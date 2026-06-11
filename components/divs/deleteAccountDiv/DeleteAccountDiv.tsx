import ReasonsToNotDelete from "@/components/paragraphs/DeleteAccountParagraph";
import Icon from "@/components/icons/Icons";
import Interface from "./DeleteAccountDivInterface";
import ImSure from "@/components/buttons/ImSureCheckButton";

export default function DeleteAccountDiv({
   deleteConfirmationWasNotClicked,
   handleDeleteClick,
}: Interface) {
   return (
      <div className="flex flex-1 flex-col gap-y-8 items-center w-full">
         <p className="text-black self-baseline text-start text-[0.5rem] sm:text-[0.625rem] lg:text-[0.75rem] 2xl:text-[0.875rem] 3xl:text-[1rem] whitespace-pre-line px-4">
            {`Are you sure that you wanna delete your accout? By deleting your account \nthe following will happen:`}
         </p>
         <div className="flex flex-col gap-y-3 w-full">
            <ReasonsToNotDelete text="You will be logout on all devices" />
            <ReasonsToNotDelete text="Your account information will be deleted" />
            <ReasonsToNotDelete text="You will no longer have access this site services" />
         </div>
         <ImSure
            text="Yes, I'm sure"
            deleteConfirmationWasNotClicked={deleteConfirmationWasNotClicked}
            handleDeleteClick={handleDeleteClick}
         />
      </div>
   );
}
