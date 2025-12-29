import { useTranslations } from "next-intl";

export default function useAuthButton(submit: () => Promise<void>) {
  const scale = { scale: 1.1 };
  const t = useTranslations();

  async function handleLogin(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    await submit();
  }

  return { t, scale, handleLogin };
}
