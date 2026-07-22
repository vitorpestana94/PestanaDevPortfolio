import BackToHome from "../buttons/BackToHome";

export default async function LegalDocumentTextBlock({
   buttonLabel,
   children,
}: {
   children: React.ReactNode;
   buttonLabel: string;
}) {
   return (
      <section className="text-white flex flex-col items-center whitespace-pre-line animate-fadeIn py-10 gap-y-40 homeBg">
         <div className="flex flex-col w-9/12 gap-y-8 sm:w-6/12 sm:gap-y-14">
            <div className="flex flex-col gap-y-10 mt-10 sm:mt-20 sm:gap-y-16">
               <BackToHome buttonLabel={buttonLabel} />
               {children}
            </div>
         </div>
      </section>
   );
}
