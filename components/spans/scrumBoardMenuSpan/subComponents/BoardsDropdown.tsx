import { Link } from "@/i18n/routing";
import { useGetBoards } from "@/hooks/api/board/queries";
import useDropdown from "@/hooks/useDropdown";
import DropdownButton from "./DropdownButton";
import Icon from "@/components/icons/Icons";

export default function BoardsDropdown({ boardId, boardName }: { boardId: string; boardName: string }) {
   const { data } = useGetBoards();
   const { dropdownRef, open, setOpen, openOrClose } = useDropdown();

   return (
      <div className="relative" ref={dropdownRef}>
         <DropdownButton label={boardName} isOpen={open} onClick={openOrClose} />
         {open && (
            <div className="scrumBoardDropdown">
               {data?.boards.map((board) => (
                  <Link
                     key={board.id}
                     href={`/scrum-board/${board.id}`}
                     onClick={() => setOpen(false)}
                     className={`scrumBoardDropdownItem ${board.id === boardId ? "azulPestana" : "hover:text-[#38b6ff]"}`}
                  >
                     <p className="truncate">{board.name}</p>
                     {board.id === boardId && (
                        <Icon iconName="check" className="aspect-square w-3.5 shrink-0 stroke-[#38b6ff]" />
                     )}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );
}
