import Interface from "./AuthTextBlockInterface";
import VP from "@/components/icons/Icons";

export default function AuthTextBlock({ props }: Interface) {
  return (
    <div className="text-white relative flex flex-col justify-center items-center bg-black/20 backdrop-blur-lg h-[70%] w-[70%] rounded-lg">
      <VP iconName="vP" className="absolute w-[18%] top-0" />
      <div className="gap-y-1 mt-4 sm:mt-0 flex flex-col justify-center items-center whitespace-pre-line">
        <h2 className="text-[1.375rem] lg:text-[1.75rem]">{props.title}</h2>
        <p className="opacity-80 text-[0.5rem] lg:text-[0.625rem]">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}
