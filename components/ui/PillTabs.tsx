'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface Tab {
  id: string
  label: string
}

interface PillTabsProps {
  tabs: readonly Tab[]
  activeId: string
  onChange: (id: string) => void
  className?: string
}

const PillTabs = ({ tabs, activeId, onChange, className = '' }: PillTabsProps) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [bgPos, setBgPos] = useState<{ x: number; width: number } | null>(null)

  useLayoutEffect(() => {
    const idx = tabs.findIndex((t) => t.id === activeId)
    const btn = tabRefs.current[idx]
    if (btn) setBgPos({ x: btn.offsetLeft, width: btn.offsetWidth })
  }, [activeId, tabs])

  return (
    <div
      className={`relative inline-flex rounded-sm bg-white p-1 text-base leading-[148%] font-medium tracking-[1%] ${className}`}
    >
      {bgPos && (
        <motion.div
          className="absolute top-1 bottom-1 left-0 rounded-sm bg-(--color-accent)"
          animate={{ x: bgPos.x, width: bgPos.width }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        />
      )}
      {tabs.map((tab, idx) => (
        <button
          key={tab.id}
          ref={(el) => {
            tabRefs.current[idx] = el
          }}
          onClick={() => onChange(tab.id)}
          className="relative shrink-0 cursor-pointer rounded-sm px-6 py-2"
        >
          <span
            className={`relative z-10 transition-colors duration-200 ${
              activeId === tab.id ? 'text-white' : 'text-(--color-accent)'
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  )
}

export default PillTabs
