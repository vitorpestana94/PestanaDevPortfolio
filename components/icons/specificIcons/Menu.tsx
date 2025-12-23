import MenuIcon from "../Icons";

export default function Menu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`flex justify-center w-full ${open ? "hidden" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <MenuIcon iconName="menu" className="aspect-square w-6" />
    </div>
  );
}
