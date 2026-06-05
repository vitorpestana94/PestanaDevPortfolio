import { Chicle } from "next/font/google";

export default function DevidedSection({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="w-full flex flex-1 flex-col lg:flex-row relative">
         {children}
      </section>
   );
}
