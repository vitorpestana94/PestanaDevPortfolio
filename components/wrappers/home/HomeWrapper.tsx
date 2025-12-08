import HomeWrapperInterface from "./HomeWrapperInterface";

export default function HomeWrapper({
  children,
  className,
}: HomeWrapperInterface) {
  return <section className={`${className}`}>{children}</section>;
}
