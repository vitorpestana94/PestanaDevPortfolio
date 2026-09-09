import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Abril_Fatface, Montserrat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "./providers";
import { title, description, imageForMetaData } from "@/constants/metaData";
import "react-toastify/dist/ReactToastify.css";

if (!process.env.NEXTAUTH_URL) {
   throw Error("Next Auth secret not defined!");
}

const abrilFatFace = Abril_Fatface({
   subsets: ["latin"],
   weight: "400",
   variable: "--font-abril",
});

const montserrat = Montserrat({
   subsets: ["latin"],
   display: "swap",
   weight: ["300", "400", "500", "700"],
   variable: "--font-montserrat",
});

export const metadata: Metadata = {
   metadataBase: new URL(process.env.NEXTAUTH_URL),
   title: title,
   description: description,
   icons: {
    icon: imageForMetaData,
    shortcut: imageForMetaData
  },
   openGraph: {
      title: title,
      description: description,
      type: "website",
      locale: "en_US",
      siteName: title,
      images: [
         {
            url: imageForMetaData,
            width: 1200,
            height: 628,
            alt: title,
            type: "image/svg",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageForMetaData],
   },
   keywords: ["Full Stack Web Developer", "Site", "Back-end Web Developer", "Vitor Pestana", "Vitor Luiz Pestana Pereira", "Desenvolvedor Web Full Stack", "Desenvolvedor Web Back-end"],
   other: {
      keywords: "Vitor Pestana, Full Stack Web Developer, Back-end Web Developer, Site, Vitor Pestana, Vitor Luiz Pestana Pereira Desenvolvedor Web Full Stack Desenvolvedor Web Back-end",
   },
};

export function generateStaticParams() {
   return routing.locales.map((locale) => ({
      locale,
   }));
}

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const messages = await getMessages();

   return (
      <NextIntlClientProvider messages={messages}>
         <html lang="en">
            <head>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
               />
            </head>
            <body
               className={`${montserrat.className} ${abrilFatFace.className} homeBg`}
            >
               <Providers>{children}</Providers>
            </body>
         </html>
      </NextIntlClientProvider>
   );
}
