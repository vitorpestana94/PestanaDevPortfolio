import Icon, { IconName } from "@/components/icons/Icons";

export default function DropdownButton({
   label,
   iconName,
   isOpen,
   onClick,
}: {
   label: string;
   iconName?: IconName;
   isOpen?: boolean;
   onClick: () => void;
}) {
   return (
      <button type="button" className="scrumBoardButton" onClick={onClick}>
         {iconName && (
            <Icon iconName={iconName} className="aspect-square w-3.5 stroke-[#38b6ff]" />
         )}
         <p className="max-w-32 truncate">{label}</p>
         {isOpen !== undefined && (
            <Icon
               iconName="leftArrow"
               className={`aspect-square w-3.5 fillAzulPestana transition-transform ${isOpen ? "rotate-90" : "-rotate-90"}`}
            />
         )}
      </button>
   );
}
