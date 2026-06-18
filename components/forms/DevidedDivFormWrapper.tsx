export default function AuthDiv({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return <form className={`authForm ${className}`}>{children}</form>;
}
