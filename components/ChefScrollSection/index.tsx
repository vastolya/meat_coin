'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { getAnims, getMobileEntry, transition, VISIBLE } from './animations'
import { CHEF_BLOCKS, MoscowWorkshop } from './blocks'
import type { AnimState } from './types'

const ChefScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [entryAnim, setEntryAnim] = useState<AnimState>(VISIBLE)
  const [exitAnim, setExitAnim] = useState<AnimState>({ y: -60, opacity: 0, filter: 'blur(6px)' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(Math.floor(v * CHEF_BLOCKS.length), CHEF_BLOCKS.length - 1)
    if (next !== activeIndex) {
      const { entry, exit } = getAnims(activeIndex, next)
      setEntryAnim(entry)
      setExitAnim(exit)
      setPrevIndex(activeIndex)
      setActiveIndex(next)
    }
  })

  const ActiveBlock = CHEF_BLOCKS[activeIndex]
  const PrevBlock = prevIndex !== null ? CHEF_BLOCKS[prevIndex] : null

  return (
    <div ref={containerRef}>
      <div className="flex flex-col gap-18 overflow-hidden md:hidden md:py-12">
        {CHEF_BLOCKS.map((Block, index) => (
          <motion.div
            key={index}
            initial={getMobileEntry(index)}
            whileInView={VISIBLE}
            viewport={{ amount: 0.24, once: false }}
            transition={transition}
          >
            <Block />
          </motion.div>
        ))}
      </div>

      <div className="hidden h-[250vh] md:block">
        <div className="bg-beige sticky top-0 flex h-screen items-center">
          <div className="relative w-full">
            <div className="pointer-events-none invisible" aria-hidden>
              <MoscowWorkshop />
            </div>

            {PrevBlock && (
              <motion.div
                key={`prev-${prevIndex}-${activeIndex}`}
                initial={VISIBLE}
                animate={exitAnim}
                transition={transition}
                className="absolute top-0 right-0 left-0"
              >
                <PrevBlock />
              </motion.div>
            )}

            <motion.div
              key={`active-${activeIndex}`}
              initial={entryAnim}
              animate={VISIBLE}
              transition={transition}
              className="absolute top-0 right-0 left-0"
            >
              <ActiveBlock />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChefScrollSection
