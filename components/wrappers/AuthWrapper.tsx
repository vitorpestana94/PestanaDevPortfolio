export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[70%] sm:w-[60%]">{children}</div>;
}
