"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type SegmentedOption = {
  value: string
  label: React.ReactNode
}

type SegmentedToggleProps = {
  options: readonly [SegmentedOption, SegmentedOption]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

function SegmentedToggle({
  options,
  value,
  onValueChange,
  className,
}: SegmentedToggleProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragIndex, setDragIndex] = React.useState<number | null>(null)
  const selectedIndex = React.useMemo(
    () =>
      Math.max(
        0,
        options.findIndex((option) => option.value === value)
      ),
    [options, value]
  )
  const visualIndex = dragIndex ?? selectedIndex

  const getIndexFromClientX = React.useCallback(
    (clientX: number) => {
      const container = containerRef.current
      if (!container) return selectedIndex

      const rect = container.getBoundingClientRect()
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
      return x < rect.width / 2 ? 0 : 1
    },
    [selectedIndex]
  )

  const commitIndex = React.useCallback(
    (index: number) => {
      const next = options[index]?.value
      if (next && next !== value) {
        onValueChange(next)
      }
    },
    [onValueChange, options, value]
  )

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    setIsDragging(true)
    setDragIndex(getIndexFromClientX(event.clientX))
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setDragIndex(getIndexFromClientX(event.clientX))
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const finalIndex = dragIndex ?? getIndexFromClientX(event.clientX)
    commitIndex(finalIndex)
    setIsDragging(false)
    setDragIndex(null)
  }

  return (
    <div
      ref={containerRef}
      role="radiogroup"
      aria-label="Toggle options"
      className={cn(
        "relative grid h-10 w-fit min-w-44 grid-cols-2 border border-foreground bg-background p-0 select-none",
        className
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        setIsDragging(false)
        setDragIndex(null)
      }}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 bottom-0 w-1/2 border-x border-foreground bg-foreground transition-transform duration-200 ease-out",
          visualIndex === 1 ? "translate-x-full" : "translate-x-0"
        )}
      />
      {options.map((option, index) => {
        const isSelected = index === visualIndex
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selectedIndex === index}
            tabIndex={selectedIndex === index ? 0 : -1}
            className={cn(
              "relative z-10 flex h-full items-center justify-center px-3 text-sm font-bold tracking-wide uppercase transition-colors",
              isSelected ? "text-background" : "text-foreground"
            )}
            onClick={() => commitIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                event.preventDefault()
                const nextIndex = event.key === "ArrowRight" ? 1 : 0
                commitIndex(nextIndex)
              }
            }}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export { SegmentedToggle, type SegmentedToggleProps }
