import HomePortfolioDivsGroupsInteface from "./HomePortfolioDivsGroupsInteface";

export default function HomePortfolioDivsGroups({
  children,
  className,
}: HomePortfolioDivsGroupsInteface) {
  return <div className={`flex flex-col w-full  ${className}`}>{children}</div>;
}
