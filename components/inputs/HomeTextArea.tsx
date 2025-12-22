export default function HomeTextArea({ placeHolder }: { placeHolder: string }) {
  return (
    <textarea
      className="text-[0.4375rem] sm:text-[0.5rem] text-justify rounded-md focus:outline-none px-2 py-3 border border-[#808080] placeholder:text-justify 
      aspect-[1/0.7] sm:aspect-[1/0.15] w-[95%] sm:w-[80%] text-white resize-none overflow-hidden"
      placeholder={placeHolder}
    ></textarea>
  );
}
