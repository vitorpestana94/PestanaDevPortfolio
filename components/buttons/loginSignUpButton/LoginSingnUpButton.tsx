import LoginSingnUpButtonInterface from "./LoginSingnUpButtonInterface";
import Link from "next/link";

export default function LoginSingnUpButton({
   buttonLabel,
   buttonStyle,
   href,
   buttonClick,
}: LoginSingnUpButtonInterface) {
   return (
      <Link
         href={href}
         onClick={() => buttonClick()}
         type="button"
         className={`text-white p-1 flex-1 flex items-center justify-center cursor-pointer rounded-2xl ${buttonStyle}`}
      >
         {buttonLabel}
      </Link>
   );
}
