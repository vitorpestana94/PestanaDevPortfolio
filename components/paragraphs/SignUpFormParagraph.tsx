export default function SignUpFormParagraph({ text }: { text: string }) {
  return (
    <p className="text-black text-center text-xs sm:text-sm lg:text-[1rem] whitespace-pre-line mt-10">
      {text}
    </p>
  );
}
