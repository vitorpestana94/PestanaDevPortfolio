import Header from "@/components/headers/home/SiteHeader";

export default function ScrumBoardLayout({ children }: { children: React.ReactNode }) {
   return (
      <main className="homeDefault flex flex-col relative">
         <Header className="static!" />
         {children}
      </main>
   );
}
