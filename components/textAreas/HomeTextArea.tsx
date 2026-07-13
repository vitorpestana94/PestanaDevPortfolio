import Error from "../errors/error/Error";
import HomeTextAreaInterface from "./HomeTextAreaInterface";

export default function HomeTextArea({
   placeHolder,
   errorMessage,
   errors,
   register,
}: HomeTextAreaInterface) {
   return (
      <div className="w-full flex flex-col items-end">
         <textarea
            {...register!("clientMessage", {
               required: errorMessage,
            })}
            className="text-[0.4375rem] m-0 sm:text-[0.5rem] 3xl:text-[0.625rem] sm:text-right sm:placeholder:text-right 
            text-justify rounded-md focus:outline-none px-2 py-3 border border-[#808080] placeholder:text-center 
            aspect-[1/0.7] sm:aspect-[1/0.4] lg:aspect-1/0.25 2xl:aspect-[1/0.2] w-[95%] lg:w-[80%] text-white resize-none overflow-hidden"
            placeholder={placeHolder}
         />
         <Error
            shouldRender={errors?.clientMessage?.message !== undefined}
            message={errors?.clientMessage?.message as string}
         />
      </div>
   );
}
