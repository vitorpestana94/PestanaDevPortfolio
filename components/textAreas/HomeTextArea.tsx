import useHomeTextArea from "./useHomeTextArea";
import Error from "../errors/error/Error";
import HomeTextAreaInterface from "./HomeTextAreaInterface";

export default function HomeTextArea({
  placeHolder,
  setIsFormWithError,
  setFormData,
}: HomeTextAreaInterface) {
  const { t, isTextAreaEmpty, verifyTextArea } =
    useHomeTextArea(setIsFormWithError);

  return (
    <div className="w-full flex flex-col items-end">
      <textarea
        onChange={(event) => setFormData(event.target.value)}
        onBlur={(event) => verifyTextArea(event)}
        className="text-[0.4375rem] m-0 sm:text-[0.5rem] sm:text-right sm:placeholder:text-right 
      text-justify rounded-md focus:outline-none px-2 py-3 border border-[#808080] placeholder:text-center 
      aspect-[1/0.7] sm:aspect-[1/0.4] lg:aspect-[1/0.25] 2xl:aspect-[1/0.2] w-[95%] lg:w-[80%] text-white resize-none overflow-hidden"
        placeholder={placeHolder}
      />
      <Error
        shouldRender={isTextAreaEmpty}
        message={t("home.quartaSessao.form.errors.textArea")}
      />
    </div>
  );
}
