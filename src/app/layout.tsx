import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badlen-site.vercel.app"),
  title: {
    default: "BADLEN · свадебный салон и ателье в Бресте",
    template: "%s · BADLEN",
  },
  description:
    "BADLEN в Бресте: свадебные и вечерние платья, пошив на заказ, ателье, подгонка по фигуре и корсеты на заказ по Беларуси.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BADLEN · свадебный салон и ателье в Бресте",
    description:
      "Свадебные и вечерние платья в Бресте, пошив на заказ, ателье и корсеты на заказ по Беларуси.",
    url: "https://badlen-site.vercel.app",
    siteName: "BADLEN",
    locale: "ru_BY",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="ru">
      <body className="site-body">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
