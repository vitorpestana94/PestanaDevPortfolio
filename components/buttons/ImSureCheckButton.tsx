import Interface from "../divs/deleteAccountDiv/DeleteAccountDivInterface";
import Icon from "@/components/icons/Icons";

export default function ImSureCheckButton({
   text,
   deleteConfirmationWasNotClicked,
   handleDeleteClick,
}: Interface & { text: string }) {
   return (
      <div className="flex gap-x-3 self-start px-4">
         <button
            type="button"
            className="aspect-square w-3.5 border border-black rounded-sm flex justify-center items-center"
            onClick={() => handleDeleteClick()}
         >
            {!deleteConfirmationWasNotClicked && (
               <Icon
                  iconName="check"
                  className="aspect-square w-3 stroke-black"
               />
            )}
         </button>
         <p className="text-[0.5rem] sm:text-[0.5rem] md:text-[0.625rem]">
            {text}
         </p>
      </div>
   );
}
