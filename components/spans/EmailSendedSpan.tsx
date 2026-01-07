import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function EmailSendedSpan() {
  const t = useTranslations("home.quartaSessao.form");
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 text-white rounded-md bg-[#38b6ff] p-4 m-4 font-clashMedium
      between100And250:text-[0.6rem]
      between250And350:text-[0.65rem]
      between350And390:text-[0.68rem]
      text-[0.7rem]
      sm:text-[0.75rem]
      md:text-[0.8rem]
      xl:text-[1rem]"
    >
      {t("emailSended")}
    </motion.span>
  );
}
