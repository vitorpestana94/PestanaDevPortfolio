type AutoCompletType = "username";

export default function BaitInput({ type }: { type?: AutoCompletType }) {
   // This input is used to avoid browser's wrongly autocompletes
   return (
      <input autoComplete={type ?? "username"} style={{ display: "none" }} />
   );
}
