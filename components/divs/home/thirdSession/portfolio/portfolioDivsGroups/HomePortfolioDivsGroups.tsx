import HomePortfolioDivsGroupsInteface from "./HomePortfolioDivsGroupsInteface";

export default function HomePortfolioDivsGroups({
  children,
  className,
}: HomePortfolioDivsGroupsInteface) {
  return (
    <div className={`flex flex-col aspect-square w-1/3 ${className}`}>
      {children}
    </div>
  );
}
