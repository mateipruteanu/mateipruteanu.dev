import * as React from "react"

import { cn } from "@/lib/utils"

const typographyVariants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  inlineCode:
    "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm leading-none font-medium",
  muted: "text-sm text-muted-foreground",
} as const

type TypographyVariant = keyof typeof typographyVariants
type TypographyFont = "sans" | "playfair"

const variantDefaultElement: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  list: "ul",
  inlineCode: "code",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
}

const fontVariants: Record<TypographyFont, string> = {
  sans: "font-sans",
  playfair: "font-heading",
}

type TypographyProps<C extends React.ElementType> = {
  variant?: TypographyVariant
  font?: TypographyFont
  as?: C
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className" | "children">

type TypographyHighlightProps<C extends React.ElementType> = {
  as?: C
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className" | "children">

function Typography<C extends React.ElementType = "p">({
  variant = "p",
  font = "sans",
  as,
  className,
  children,
  ...props
}: TypographyProps<C>) {
  const Comp = (as ?? variantDefaultElement[variant]) as React.ElementType

  return (
    <Comp className={cn(fontVariants[font], typographyVariants[variant], className)} {...props}>
      {children}
    </Comp>
  )
}

function TypographyHighlight<C extends React.ElementType = "span">({
  as,
  className,
  children,
  ...props
}: TypographyHighlightProps<C>) {
  const Comp = (as ?? "span") as React.ElementType

  return (
    <Comp className={cn("inline-block bg-foreground px-1 text-background", className)} {...props}>
      {children}
    </Comp>
  )
}

export {
  Typography,
  TypographyHighlight,
  type TypographyFont,
  type TypographyVariant,
}
