import { getTranslations } from 'next-intl/server';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import BackToHome from "../buttons/BackToHome";

export default async function NotFound(){
    const t = await getTranslations("notFound");

    return (
        <section className="homeBg w-full min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-white w-full xl:w-1/2 relative">
                <BackToHome  buttonLabel={t("backToHome")} className='absolute top-[20%] left-[10%]' />
                <div className='absolute space-y-2
                    bottom-[22%] right-[25%]
                    sm:right-[30%]'>
                    <h1 className='text-right font-bold  text-[#38b6ff] font-abril tracking-widest whitespace-pre-line
                    text-xs 
                    sm:text-[1.25rem]'>
                    {t("title")}
                    </h1>
                </div>
                <DotLottieReact src="/lotties/404.json" autoplay loop
                className='aspect-square w-full sm:w-[80%]'/>
            </div>
        </section>
    )
}