"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

import { i18n, type Locale } from "@/i18n-config"
import { SegmentedToggle } from "@/components/ui/segmented-toggle"

type LocaleSwitcherProps = {
  locale: Locale
}

function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [optimisticLocale, setOptimisticLocale] = React.useOptimistic(locale)

  const changeLocale = (nextLocale: string) => {
    if (!i18n.locales.includes(nextLocale as Locale)) return
    if (nextLocale === optimisticLocale) return

    const typedLocale = nextLocale as Locale
    setOptimisticLocale(typedLocale)

    const segments = pathname.split("/")
    if (segments.length > 1) {
      segments[1] = typedLocale
    }
    const nextPath = segments.join("/") || `/${typedLocale}`
    router.replace(nextPath)
  }

  return (
    <SegmentedToggle
      value={optimisticLocale}
      onValueChange={changeLocale}
      options={[
        { value: "en", label: "🇺🇸 EN" },
        { value: "ro", label: "🇷🇴 RO" },
      ]}
    />
  )
}

export { LocaleSwitcher }
