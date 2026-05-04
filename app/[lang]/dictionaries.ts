import "server-only"

import type { Locale } from "@/i18n-config"

type Dictionary = {
  home: {
    title: string
    description: string
    componentsAdded: string
    buttonLabel: string
    themeHint: string
  }
}

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ro: () => import("./dictionaries/ro.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]()
