import LastSection from "@/components/sections/home/HomeLastSection";

export default function MainLayout({ children }:{ children: React.ReactNode }){
    return (
        <main className="homeBg flex flex-col relative">
            {children}
            <LastSection />
        </main>
    )
}