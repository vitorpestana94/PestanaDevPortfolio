export default function FormWrapper({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return <div className={`w-[70%] sm:w-[60%]  ${className}`}>{children}</div>;
}
