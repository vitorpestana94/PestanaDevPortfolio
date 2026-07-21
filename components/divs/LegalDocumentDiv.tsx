export default function LegalDocumentDiv({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="border-b-2 border-opacity-10 border-b-[#38b6ff] space-y-4 lg:pr-16 pb-6 ">
         {children}
      </div>
   );
}
