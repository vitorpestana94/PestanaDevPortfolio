import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";
import Spinner from "../../loaders/Spinner";
import HomeFormButtonInterface from "./HomeFormButtonInterface";
import { motion } from "motion/react";
import Error from "@/components/errors/error/Error";
import { useTranslations } from "next-intl";

export default function HomeFormButton({
  isFormWithErros,
  isLoading,
  label,
}: HomeFormButtonInterface) {
  const { scale, transition } = useButtonMotionEffects();
  const t = useTranslations();

  return (
    <div className="w-full flex flex-col items-end">
      <motion.button
        whileTap={scale}
        whileHover={scale}
        disabled={isFormWithErros}
        transition={transition}
        type="submit"
        className={`relative text-shadow-2xl aspect-video w-[35%] sm:w-[20%] lg:w-[12%] min-w-10 max-w-16
      rounded-md text-[0.5rem] sm:text-[0.625rem] bg-[#38b6ff] text-white
      ${isFormWithErros ? "buttonDisabled" : "cursor-pointer"}`}
      >
        {isLoading ? <Spinner loading={isLoading} /> : label}
      </motion.button>
      <Error
        shouldRender={isFormWithErros}
        styles=" !text-[0.5rem] text-nowrap"
        message={t("home.quartaSessao.form.errors.button")}
      />
    </div>
  );
}
