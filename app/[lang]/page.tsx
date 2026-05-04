import { notFound } from "next/navigation"

import { LocaleSwitcher } from "@/components/locale-switcher"
import { Button } from "@/components/ui/button"

import { getDictionary, hasLocale } from "./dictionaries"

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <LocaleSwitcher locale={lang} />
        <div>
          <h1 className="font-medium">{dict.home.title}</h1>
          <p>{dict.home.description}</p>
          <p>{dict.home.componentsAdded}</p>
          <Button className="mt-2">{dict.home.buttonLabel}</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          {dict.home.themeHint}
        </div>
      </div>
    </div>
  )
}
