export default function LegalDocumentListItem({
   children,
}: {
   children: React.ReactNode;
}) {
   return <li className="text-[0.75rem] list-disc">{children}</li>;
}
