import { useTranslations } from "next-intl";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";

export default function usePlatformButton() {
  const t = useTranslations("auth.common");
  const { scale, transition } = useButtonMotionEffects();
  const buttonColors: { [key: string]: string } = {
    google: "bg-white text-black",
    gitHub: "bg-[#24292E] text-white",
    linkedin: "bg-[#0077B5] text-white",
  };

  return { t, buttonColors, scale, transition };
}
