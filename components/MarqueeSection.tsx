'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const REPEAT = 4

function Row() {
  return (
    <>
      {Array.from({ length: REPEAT }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center gap-11 pr-11">
          <div className="h-19.5 w-24 shrink-0 bg-[url('/ornament_small.svg')] bg-contain bg-no-repeat" />
          <span className="font-albertus shrink-0 whitespace-nowrap text-[88px] leading-[109%] font-[250] uppercase">
            Мясо совершенной вдержки
          </span>
        </span>
      ))}
    </>
  )
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [-700, -100])
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, -700])

  return (
    <section ref={ref} className="bg-accent overflow-hidden flex flex-col gap-7 py-30">
      <motion.div style={{ x: x1 }} className="flex">
        <Row />
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex">
        <Row />
      </motion.div>
    </section>
  )
}
