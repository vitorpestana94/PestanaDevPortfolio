export default function DevidedMain({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <main className="z-0 flex flex-2 lg:flex-1 bg-white">{children}</main>
   );
}
