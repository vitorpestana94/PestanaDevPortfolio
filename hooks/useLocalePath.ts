import { useLocale } from "next-intl";

export default function useLocalePath(subPath: string) {
  const locale = useLocale();
  const path = `${locale}/${subPath}`;

  return { path, locale };
}
