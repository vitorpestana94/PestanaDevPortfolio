import Interface from "../ScrumBoardMenuSpanInterface";
import useMembersDropdown from "./useMembersDropdown";
import useDropdown from "@/hooks/useDropdown";
import DropdownButton from "./DropdownButton";
import Icon from "@/components/icons/Icons";
import Spinner from "@/components/loaders/Spinner";

export default function MembersDropdown(props: Interface) {
   const { isOwner, myUserId } = props;
   const { t, email, members, isAdding, isEmailValid, setEmail, add, remove } =
      useMembersDropdown(props);
   const { dropdownRef, open, openOrClose } = useDropdown();

   // The owner can remove anyone but themselves, and a member can only remove themselves (leave the board).
   const canRemove = (memberId: string, isMemberOwner: boolean) =>
      !isMemberOwner && (isOwner || memberId === myUserId);

   return (
      <div className="relative" ref={dropdownRef}>
         <DropdownButton
            label={`${t("members")} (${members.length})`}
            iconName="profile"
            isOpen={open}
            onClick={openOrClose}
         />
         {open && (
            <div className="scrumBoardDropdown">
               {members.map((member) => (
                  <span key={member.id} className="scrumBoardDropdownItem">
                     <span className="flex flex-col gap-y-0.5 min-w-0">
                        <p className="truncate text-white">{member.name || member.email}</p>
                        {member.isOwner && <p className="azulPestana text-[0.5rem]">{t("owner")}</p>}
                     </span>
                     {canRemove(member.id, member.isOwner) && (
                        <button
                           type="button"
                           className="cursor-pointer shrink-0"
                           title={member.id === myUserId ? t("leave") : undefined}
                           onClick={() => remove(member.id)}
                        >
                           <Icon
                              iconName={member.id === myUserId ? "logout" : "xCircle"}
                              className="aspect-square w-3.5 fill-[#bfbfbf] stroke-[#bfbfbf] hover:fill-red-600 hover:stroke-red-600"
                           />
                        </button>
                     )}
                  </span>
               ))}
               {isOwner && (
                  <span className="flex items-center gap-x-3 px-4 py-3 border-t border-black">
                     <input
                        type="email"
                        value={email}
                        placeholder={t("memberEmail")}
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyDown={(event) => event.key === "Enter" && add()}
                        className="scrumBoardInput flex-1 min-w-0"
                     />
                     <button
                        type="button"
                        disabled={!isEmailValid}
                        className={`relative bgAzulPestana rounded-full px-3 py-1.5 text-white text-nowrap min-w-20 min-h-6
                        ${isEmailValid ? "cursor-pointer" : "buttonDisabled"}`}
                        onClick={add}
                     >
                        {isAdding ? <Spinner loading={isAdding} style="max-h-5" /> : t("addMember")}
                     </button>
                  </span>
               )}
            </div>
         )}
      </div>
   );
}
