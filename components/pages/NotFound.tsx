import { getTranslations } from 'next-intl/server';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default async function NotFound(){
    const t = await getTranslations();

    return (
        <section className="homeBg w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center text-white w-full xl:w-1/2 relative">
                <h1 className='absolute text-right font-bold  text-[#38b6ff] font-abril tracking-widest whitespace-pre-line
                bottom-[22%] right-[25%] text-xs 
                sm:right-[30%] sm:text-[1.25rem]'>
                {t("notFound")}
                </h1>
                <DotLottieReact src="/lotties/404.json" autoplay loop
                className='aspect-square w-full sm:w-[80%]'/>
            </div>
        </section>
    )
}