import BoardUser from "@/models/interfaces/dtos/board/BoardUser";
import useDropdown from "@/hooks/useDropdown";
import Icon from "@/components/icons/Icons";

export default function OwnerDropdown({
   boardUsers,
   ownerId,
   noOwnerLabel,
   selectOwner,
}: {
   boardUsers: BoardUser[];
   ownerId?: string | null;
   noOwnerLabel: string;
   selectOwner: (userId: string) => void;
}) {
   const { dropdownRef, open, setOpen, openOrClose } = useDropdown();
   const owner = boardUsers.find((user) => user.id === ownerId);

   return (
      <div className="relative w-full" ref={dropdownRef}>
         <button
            type="button"
            onClick={openOrClose}
            className="profileDataInputs flex justify-between items-center gap-x-3 cursor-pointer text-start"
         >
            <p className="truncate pl-1">{owner ? owner.name || owner.email : noOwnerLabel}</p>
            <Icon
               iconName="leftArrow"
               className={`aspect-square w-3.5 shrink-0 fill-[#bfbfbf] transition-transform ${open ? "rotate-90" : "-rotate-90"}`}
            />
         </button>
         {open && (
            <div className="scrumBoardDropdown left-0 w-full mt-2.5!">
               {boardUsers.map((user) => (
                  <button
                     type="button"
                     key={user.id}
                     className="scrumBoardDropdownItem pl-6! cursor-pointer"
                     onClick={() => {
                        selectOwner(user.id);
                        setOpen(false);
                     }}
                  >
                     <p className={`truncate ${user.id === ownerId ? "azulPestana" : "text-white"}`}>
                        {user.name || user.email}
                     </p>
                     {user.id === ownerId && (
                        <Icon iconName="check" className="aspect-square w-3.5 shrink-0 stroke-[#38b6ff]" />
                     )}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
}
