import Interface from "./ForgotPasswordParagraphInterface";

export default function ForgotPasswordParagraph({
   text,
   switchToForgotPassword,
}: Interface) {
   return (
      <p
         className="ml-auto xxs:text-[0.5rem] xs:text-[0.625rem] underline underline-offset-4 cursor-pointer hover:text-[#30b6ff]"
         onClick={() => switchToForgotPassword()}
      >
         {text}
      </p>
   );
}
