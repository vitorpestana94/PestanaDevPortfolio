export default function AuthDiv({ children }: { children: React.ReactNode }) {
  return (
    <form
      className="bg-white flex-[1.5] rounded-t-4xl sm:rounded-t-none sm:flex-[0.7] z-40
    flex flex-col justify-around items-center"
    >
      {children}
    </form>
  );
}
