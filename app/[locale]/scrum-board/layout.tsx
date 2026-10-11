import ScrumBoardLayout from "@/components/layouts/ScrumBoardLayout/ScrumBoardLayout";

export default function ScrumBoardSectionLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <ScrumBoardLayout children={children} />;
}
