export default function HomeFormButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="py-1 px-3 rounded-md text-[0.5rem] sm:text-[0.625rem] bg-[#38b6ff] cursor-pointer"
      onClick={() => {}}
    >
      {label}
    </button>
  );
}
