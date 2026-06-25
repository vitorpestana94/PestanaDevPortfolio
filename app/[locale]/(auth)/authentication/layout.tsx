import Banner from "@components/divs/AuthDivBg/AuthDivBg";
import DevidedSection from "@/components/sections/DevidedSection";
import Script from "next/script";

if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
   throw Error("BUILD ERROR: RECAPTCHA PUBLIC KEY NOT SETTED");
}

export default async function DashboardSectionLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <DevidedSection>
         <Banner />
         {children}
         <Script
            strategy="afterInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
         />
      </DevidedSection>
   );
}
