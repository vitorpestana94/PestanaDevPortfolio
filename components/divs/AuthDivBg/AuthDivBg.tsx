"use client";

import Texto from "../../textBlocks/authTextBlock/AuthTextBlock";
import useAuthDivBg from "./useAuthDivBg";

export default function AuthDivBg({ isLogin }: { isLogin: boolean }) {
  const { flow, t } = useAuthDivBg(isLogin);

  return (
    <div className="flex-1 sm:relative">
      <div className="absolute opacity-70 z-0 inset-0 bg-[url('https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=639&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <Texto
          props={{
            title: t(`auth.${flow}.banner.title`),
            paragraph: t(`auth.${flow}.banner.paragraph`),
          }}
        />
      </div>
    </div>
  );
}
