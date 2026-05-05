export default function ConfirmationCodeParagraph({ text }: { text: string }) {
  return (
    <p className="text-black text-center text-xs sm:text-sm whitespace-pre-line">
      {text}
    </p>
  );
}
