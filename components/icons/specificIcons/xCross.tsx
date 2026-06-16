import XCross from "../Icons";

export default function xCross({
   setOpen,
}: {
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   return (
      <span onClick={() => setOpen(false)}>
         <XCross iconName="xCross" className="w-6 absolute top-8 right-8" />
      </span>
   );
}
