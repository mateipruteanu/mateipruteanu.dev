import * as React from "react"

import { cn } from "@/lib/utils"

type LayoutBoxPresetSize = "xs" | "sm" | "md" | "lg" | "xl" | "full"

const sizeByScope: Record<"page" | "parent", Record<LayoutBoxPresetSize, string>> = {
  page: {
    xs: "max-w-md",
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-6xl",
    full: "max-w-none",
  },
  parent: {
    xs: "max-w-1/4",
    sm: "max-w-1/3",
    md: "max-w-1/2",
    lg: "max-w-2/3",
    xl: "max-w-3/4",
    full: "max-w-full",
  },
}

const alignXVariants: Record<"left" | "center" | "right", string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
}

const alignYVariants: Record<"top" | "center" | "bottom", string> = {
  top: "self-start",
  center: "self-center",
  bottom: "self-end",
}

const contentAlignVariants: Record<"left" | "center" | "right", string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

type LayoutBoxProps<C extends React.ElementType> = {
  as?: C
  scope?: "page" | "parent"
  size?: LayoutBoxPresetSize | `${number}%`
  alignX?: "left" | "center" | "right"
  alignY?: "top" | "center" | "bottom"
  contentAlign?: "left" | "center" | "right"
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className" | "children">

function LayoutBox<C extends React.ElementType = "div">({
  as,
  scope = "parent",
  size = "md",
  alignX = "left",
  alignY = "top",
  contentAlign = "left",
  className,
  children,
  ...props
}: LayoutBoxProps<C>) {
  const Comp = (as ?? "div") as React.ElementType
  const customPercentSize = typeof size === "string" && size.endsWith("%")
  const presetSize: LayoutBoxPresetSize = customPercentSize
    ? "md"
    : (size as LayoutBoxPresetSize)
  const maxWidthStyle: React.CSSProperties | undefined = customPercentSize
    ? {
        maxWidth: scope === "page" ? `${size.slice(0, -1)}vw` : size,
      }
    : undefined

  return (
    <Comp
      className={cn(
        "w-full",
        !customPercentSize ? sizeByScope[scope][presetSize] : null,
        alignXVariants[alignX],
        alignYVariants[alignY],
        contentAlignVariants[contentAlign],
        className
      )}
      style={maxWidthStyle}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { LayoutBox, type LayoutBoxProps }
