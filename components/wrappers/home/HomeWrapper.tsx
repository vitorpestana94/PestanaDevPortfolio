import HomeWrapperInterface from "./HomeWrapperInterface";

export default function HomeWrapper({
  children,
  specificStyle,
}: HomeWrapperInterface) {
  return (
    <section className={`xl:mx-[90px] 3xl:mx-72 ${specificStyle}`}>
      {children}
    </section>
  );
}
