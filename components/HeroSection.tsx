'use client'

import { useLayoutEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, animate } from 'motion/react'
import H1Title from './ui/H1Title'
import Paragraph from './ui/Paragraph'
import GridSection from './ui/GridSection'

function buildClipPath(scrollP: number, entranceP: number, textH: number) {
  const topClip = textH * (1 - scrollP)
  const leftClip = (1 - entranceP) * 100
  return `inset(${topClip}px 0px 0px ${leftClip}%)`
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLElement>(null)

  const textHeight = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  })

  const entrance = useMotionValue(0)

  useLayoutEffect(() => {
    animate(entrance, 1, {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.8, // video delay
    })
  }, [entrance])

  useLayoutEffect(() => {
    if (textRef.current) {
      textHeight.set(textRef.current.offsetHeight)
    }
  }, [textHeight])

  const clipPath = useTransform([smoothScroll, entrance], ([scrollP, entranceP]) =>
    buildClipPath(scrollP as number, entranceP as number, textHeight.get())
  )

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <GridSection ref={textRef} className="py-35 md:py-18">
          <Paragraph delay={0.2} className="text-gray col-span-4">
            Бренд, где выбор отрубов, выдержка <br />и прожарка — традиция поколений
          </Paragraph>

          <div className="col-span-7 flex flex-col gap-2">
            <H1Title delay={0.4}>
              <span className="text-accent">Meat_Coin&nbsp;</span>
              сеть мясных ресторанов
            </H1Title>

            <Paragraph delay={0.6}>В Москве и Санкт-Петербурге</Paragraph>
          </div>
        </GridSection>

        <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath }}>
          <video
            className="h-full w-full object-cover"
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </div>
    </section>
  )
}
