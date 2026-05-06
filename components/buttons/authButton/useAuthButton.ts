import useButtonMotionEffects from "@/hooks/useButtonMotionEffects";

export default function useAuthButton(submit: () => Promise<void>) {
  const { scale, transition } = useButtonMotionEffects();

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();

    await submit();
  }

  return { transition, scale, handleClick };
}
