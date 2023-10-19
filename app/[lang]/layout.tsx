import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WYSAX | School Management Software | School ERP Software",
  description:
    "WYSAX is an advanced school management software created using a modular framework & new technologies. Assist schools in adopting school ERP software to improve educational outcomes and simplify school operations.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: string) => ({ lang: locale }));
}

// console.log("generateStaticParams() :",generateStaticParams())

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // console.log("dir(params.lang) ::", dir(params.lang));
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
