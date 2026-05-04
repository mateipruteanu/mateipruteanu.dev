import {
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google"
import { notFound } from "next/navigation"

import { ThemeProvider } from "@/components/theme-provider"
import { i18n } from "@/i18n-config"
import { cn } from "@/lib/utils"

import "../globals.css"
import { hasLocale } from "./dictionaries"

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
