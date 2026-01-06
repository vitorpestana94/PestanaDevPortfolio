import { useTranslations } from "next-intl";
export default function LoginHr() {
  const t = useTranslations("auth.common");

  return (
    <div className="flex items-center w-[70%] sm:w-[60%] self-center">
      <div className="flex w-full border-t border-gray-500"></div>
      <span className="px-3 text-gray-500 text-[0.75rem] xl:text-[0.875rem] font-medium">
        {t("or")}
      </span>
      <div className="flex w-full border-t border-gray-500"></div>
    </div>
  );
}
