import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
export default function HomePortfolioDivGifOrImage({
  props,
}: HomePortfolioDivInterface) {
  return (
    <div
      className={`${props.size.widthAndHeight} pointer-events-none relative z-0 border-8 border-black`}
    >
      <div
        className={`absolute inset-0 bg-no-repeat bg-cover bg-center`}
        style={{
          backgroundImage: `url('${props.bgImage}')`,
        }}
      />
    </div>
  );
}
