import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextResponse } from "next/server"

import { i18n } from "@/i18n-config"

function getLocale(request: Request) {
  const headers = Object.fromEntries(request.headers.entries())
  const languages = new Negotiator({ headers }).languages()

  return match(languages, i18n.locales, i18n.defaultLocale)
}

export function proxy(request: Request) {
  const { pathname } = new URL(request.url)
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  const url = new URL(request.url)
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
}
