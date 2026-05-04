'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const REPEAT = 4

function Row() {
  return (
    <>
      {Array.from({ length: REPEAT }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center pr-4 md:pr-11">
          <div className="mr-4 h-10 w-8 shrink-0 bg-[url('/ornament_small.svg')] bg-contain bg-no-repeat md:mr-0 md:h-19.5 md:w-24" />
          <span className="font-albertus shrink-0 text-center text-4xl leading-[122%] font-[250] tracking-[-0.01em] whitespace-nowrap uppercase md:text-[5.5rem] md:leading-[109%]">
            Мясо совершенной выдержки
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
  const x2 = useTransform(scrollYProgress, [0, 1], [-700, -1800])

  return (
    <section ref={ref} className="bg-accent flex flex-col gap-7 overflow-hidden py-12 md:py-30">
      <motion.div style={{ x: x1 }} className="flex">
        <Row />
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex">
        <Row />
      </motion.div>
    </section>
  )
}
