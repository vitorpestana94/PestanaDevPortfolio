export default function LegalDocumentTitle({
   children,
   mainTitle = false,
}: {
   children: React.ReactNode;
   mainTitle?: boolean;
}) {
   return mainTitle ? (
      <h1 id="page-title" className={"legalDocumentTitle"}>
         {children}
      </h1>
   ) : (
      <h2 className={"legalDocumentTitle"}>{children}</h2>
   );
}
