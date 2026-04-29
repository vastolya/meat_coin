'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'

const TEXT_SLIDE = {
  initial: { x: 40, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

// Computes clip-path that reveals image from below text and from the right
function buildClipPath(scrollP: number, entranceP: number, textH: number) {
  const topClip = textH * (1 - scrollP) // shrinks to 0 as image fills screen
  const leftClip = (1 - entranceP) * 100 // shrinks right-to-left on entrance
  return `inset(${topClip}px 0px 0px ${leftClip}%)`
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLElement>(null)

  // mounted gates the image render to avoid SSR clip-path mismatch
  const [mounted, setMounted] = useState(false)
  const textHeight = useMotionValue(0)

  // snap jumps to 0 or 1; spring smooths it for the scroll animation
  const snap = useMotionValue(0)
  const spring = useSpring(snap, { stiffness: 200, damping: 35 })

  // entranceProgress drives the right-to-left image reveal on load
  const entranceProgress = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useLayoutEffect(() => {
    if (!textRef.current) return
    textHeight.set(textRef.current.offsetHeight)
    setMounted(true)
  }, [textHeight])

  useEffect(() => {
    if (!mounted) return
    animate(entranceProgress, 1, { duration: 1, ease: 'easeOut', delay: 0.7 })
  }, [mounted, entranceProgress])

  useEffect(() => {
    return scrollYProgress.on('change', (v) => snap.set(v > 0 ? 1 : 0))
  }, [scrollYProgress, snap])

  const clipPath = useTransform([spring, entranceProgress], ([sp, ep]) =>
    buildClipPath(sp as number, ep as number, textHeight.get())
  )

  return (
    <div ref={containerRef} style={{ height: '200vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <section ref={textRef} className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-18">
          <motion.p
            className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]"
            variants={TEXT_SLIDE}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Бренд, где выбор отрубов, выдержка <br />и прожарка — традиция поколений
          </motion.p>

          <motion.div
            className="col-span-7 flex flex-col gap-2"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
            }}
          >
            <h1 className="font-albertus text-6xl leading-[113%] font-[250] tracking-[-1%] uppercase">
              <motion.span variants={TEXT_SLIDE} className="flex">
                <span className="text-accent">Meat_Coin&nbsp;</span>
                <span>сеть</span>
              </motion.span>
              <motion.span variants={TEXT_SLIDE} className="block">
                мясных ресторанов
              </motion.span>
            </h1>
            <motion.p
              variants={TEXT_SLIDE}
              className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]"
            >
              В Москве и Санкт-Петербурге
            </motion.p>
          </motion.div>
        </section>

        {mounted && (
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
        )}
      </div>
    </div>
  )
}
