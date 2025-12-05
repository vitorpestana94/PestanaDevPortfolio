import XCross from "../Icons";

export default function xCross({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <span onClick={() => setOpen(false)}>
      <XCross iconName="xCross" className="w-[18px] absolute top-2 left-2" />
    </span>
  );
}
