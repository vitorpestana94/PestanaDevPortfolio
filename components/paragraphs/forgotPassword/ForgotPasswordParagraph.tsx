import Interface from "./ForgotPasswordParagraphInterface";
import Link from "next/link";

export default function ForgotPasswordParagraph({ text }: Interface) {
   return (
      <Link
         href="forgot-password"
         className="ml-auto xxs:text-[0.5rem] xs:text-[0.625rem] underline underline-offset-4 cursor-pointer text-white hover:text-[#30b6ff]"
      >
         {text}
      </Link>
   );
}
