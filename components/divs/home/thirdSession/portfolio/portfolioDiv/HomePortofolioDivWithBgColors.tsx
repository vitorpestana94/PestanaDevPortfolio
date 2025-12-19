import useDivWithBgColor from "./useDivWithBgColor";
import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
export default function HomePortofolioDivWithBgColors({
  props,
}: HomePortfolioDivInterface) {
  const { motionRef } = useDivWithBgColor(
    props.bgColors ?? ["#ff0088", "#0d63f8"]
  );

  return (
    <div
      ref={motionRef}
      className={`${props.size.widthAndHeight} border-8 border-black relative`}
    ></div>
  );
}
