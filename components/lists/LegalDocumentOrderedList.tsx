export default function LegalDocumentOrderedList({
   children,
}: {
   children: React.ReactNode;
}) {
   return <ol className="ml-5">{children}</ol>;
}
