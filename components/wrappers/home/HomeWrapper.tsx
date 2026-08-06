import HomeWrapperInterface from "./HomeWrapperInterface";

export default function HomeWrapper({
  children,
  className,
}: HomeWrapperInterface) {
  return <div className={`${className}`}>{children}</div>;
}
