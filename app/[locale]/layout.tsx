import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto  } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "./providers";
import { title, description, imageForMetaData } from "@/constants/metaData";

if(!process.env.NEXTAUTH_URL){
  throw Error("Next Auth secret not defined!");
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL),
  title: title,
  description: description,
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
        type: "image/svg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageForMetaData]
  },
  icons: {
    icon: "/favicon.ico"
  },
  keywords: [
    "Full Stack Web Developer",
    "Site",
  ],
  other: {
    keywords: "Vitor Pestana, Full Stack Web Developer"
  }
};

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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={`${roboto.className}`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html >
    </NextIntlClientProvider >
  );
}

