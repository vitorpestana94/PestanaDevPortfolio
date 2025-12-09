import HomePortfolioDivInterface from "./HomePortfolioDivInterface";
import Link from "next/link";

function getLink({ props }: HomePortfolioDivInterface) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={props.picture?.routeOrSiteUrl!}
      className={`${props.size.widthAndHeight}  border-8 border-black relative`}
    >
      <div
        className={`absolute inset-0 bg-[url('/png/${props.picture?.pictureUrl}.png')] bg-no-repeat bg-cover bg-center`}
      />
    </Link>
  );
}

function getDivWithBg({ props }: HomePortfolioDivInterface) {
  return (
    <div
      className={`${props.size.widthAndHeight} ${props.bgColor}    border-8 border-black relative`}
    >
      <div
        className={`absolute inset-0 bg-[url('/png/${props.picture?.pictureUrl}.png')] bg-no-repeat bg-cover bg-center`}
      />
    </div>
  );
}

export default function HomePortfolioDiv({ props }: HomePortfolioDivInterface) {
  return <>{props.picture ? getLink({ props }) : getDivWithBg({ props })}</>;
}
