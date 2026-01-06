import { useTranslations } from "next-intl";
import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";

export default function useAuthButton(submit: () => Promise<void>) {
  const { scale, transition } = useButtonMotionEffects();
  const t = useTranslations();

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    await submit();
  }

  return { t, transition, scale, handleClick };
}
