import PlatformButtonInterface from "./PlatformButtonInterface";
import Icon from "@/components/icons/Icons";
import capitalizeWord from "@/utils/strings/capitalizeWord";
import usePlatformButton from "./usePlatformButton";
import { motion } from "motion/react";

export default function PlatformButton({
  iconName,
  signInFunction,
}: PlatformButtonInterface) {
  const { t, buttonColors, transition, scale } = usePlatformButton();

  return (
    <motion.button
      onClick={() => {
        signInFunction();
      }}
      whileTap={scale}
      whileHover={scale}
      transition={transition}
      type="button"
      className={`flex items-center gap-x-5 border py-1.5 px-5
        rounded-3xl border-[#808080] cursor-pointer
        ${buttonColors[iconName]}`}
    >
      <Icon iconName={iconName} className={`h-4 w-4 fill-white`} />
      <span className={`text-[0.625rem] xl:text-[0.75rem] text-nowrap`}>
        {`${t("with")} ${capitalizeWord(iconName)}`}
      </span>
    </motion.button>
  );
}
