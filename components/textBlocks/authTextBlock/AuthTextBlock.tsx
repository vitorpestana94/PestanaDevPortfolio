import Interface from "./AuthTextBlockInterface";
import VP from "@/components/icons/Icons";

export default function AuthTextBlock({ props }: Interface) {
  return (
    <div className="text-white relative flex flex-col justify-between items-center bg-black/20 backdrop-blur-lg h-[70%] w-[70%] rounded-lg">
      <VP iconName="vP" className="w-[35%] lg:w-[30%]" />
      <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-5 items-center whitespace-pre-line h-full">
        <h2 className="text-center leading-[1.3] text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]">
          {props.title}
        </h2>
        <p className="opacity-80 text-[0.5rem] md:text-[0.625rem] lg:text-[0.75rem]">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}
