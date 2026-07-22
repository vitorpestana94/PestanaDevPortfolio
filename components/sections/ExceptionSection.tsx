export default function ExceptionSection({ children }:{ children: React.ReactNode }){
    return (
        <section className="homeBg w-full min-h-screen flex flex-col items-center justify-center">
            {children}
        </section>
    )
}