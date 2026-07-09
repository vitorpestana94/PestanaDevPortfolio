export default function DevidedSection({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="w-full min-h-screen flex-1 flex flex-col lg:flex-row relative z-0">
         {children}
      </section>
   );
}
