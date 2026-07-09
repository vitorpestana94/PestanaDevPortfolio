export default function FormParagraph({ text }: { text: string }) {
   return (
      <p className="text-black font-bold text-center text-xs sm:text-sm lg:text-[1rem] 2xl:text-[1.125rem] 3xl:text-[1.25rem] whitespace-pre-line mt-5">
         {text}
      </p>
   );
}
