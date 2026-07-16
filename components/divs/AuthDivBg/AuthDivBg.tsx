"use client";

import useAuthDivBg from "./useAuthDivBg";
import DivBg from "../DivBg/DivBg";

export type Root = "auth" | "user";

export default function AuthDivBg({ root = "auth" }: { root?: Root }) {
   const { flow, t } = useAuthDivBg();

   return (
      <DivBg
         text={{
            title: t(`${root}.${flow}.banner.title`),
            paragraph: t(`${root}.${flow}.banner.paragraph`),
         }}
      />
   );
}
