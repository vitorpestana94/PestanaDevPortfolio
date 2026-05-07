export default function AuthDiv({ children }: { children: React.ReactNode }) {
  return (
    <form
      className="bg-white flex-[1.5] rounded-t-4xl lg:rounded-t-none lg:flex-[0.7] z-40
    flex flex-col justify-around items-center py-5 lg:py-8"
    >
      {children}
    </form>
  );
}
