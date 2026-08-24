import { useLocale } from "next-intl";

export default function useLocalePath(subPath: string) {
  const locale = useLocale();

  const normalizedPath = subPath.startsWith("/")
    ? subPath.slice(1)
    : subPath;

  const path = `/${locale}/${normalizedPath}`;

  return { path, locale };
}