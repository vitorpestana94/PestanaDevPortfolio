export default function AuthDiv({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return <div className={`authForm ${className}`}>{children}</div>;
}
