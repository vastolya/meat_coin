'use client'

import { animate, motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import GridSection from './ui/GridSection'
import H3Title from './ui/H3Title'
import Ornament from './ui/Ornament'
import Paragraph from './ui/Paragraph'

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useMotionValue(0)
  const [secondVisible, setSecondVisible] = useState(false)
  const secondVisibleRef = useRef(false)

  const firstOpacity = useTransform(progress, [0, 0.5], [1, 0], { clamp: true })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let animating = false

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect()
      const fullyVisible = rect.top >= -10 && rect.bottom <= window.innerHeight + 10
      if (!fullyVisible) return

      const p = progress.get()
      if (e.deltaY > 0 && p >= 1) return
      if (e.deltaY < 0 && p <= 0) return
      if (animating) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      animating = true
      const target = e.deltaY > 0 ? 1 : 0
      secondVisibleRef.current = target === 1
      setSecondVisible(target === 1)

      animate(progress, target, {
        duration: 0.5,
        ease: 'easeInOut',
        onComplete: () => {
          animating = false
        },
      })
    }

    const handleScroll = () => {
      if (window.innerWidth >= 768) return
      const rect = section.getBoundingClientRect()
      const shouldShow = rect.top < window.innerHeight / 2
      if (shouldShow === secondVisibleRef.current) return
      secondVisibleRef.current = shouldShow
      setSecondVisible(shouldShow)
      animate(progress, shouldShow ? 1 : 0, { duration: 0.5, ease: 'easeInOut' })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [progress])

  return (
    <GridSection ref={sectionRef} className="h-full items-center md:h-134">
      <Ornament className="py-12 md:col-span-1 md:py-0" />

      <div className="relative col-span-5 overflow-hidden md:col-start-5">
        <motion.div style={{ opacity: firstOpacity }} className="flex flex-col gap-7">
          <H3Title className="text-accent" delay={0.2}>
            Познать совершенный вкус <br /> авторской кухни
          </H3Title>
          <div className="flex flex-col gap-2 overflow-hidden">
            <Paragraph delay={0.4}>
              Философия ресторанов Meat_Coin строится вокруг главной ценности — премиального мяса
            </Paragraph>
            <Paragraph delay={0.6}>
              Мы не просто готовим стейки, мы создаём культуру, где каждый ингредиент имеет
              значение. Наши рестораны — это пространство, где турецкие традиции обращения с мясом
              встречаются с современной гастрономической эстетикой
            </Paragraph>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex flex-col gap-7">
          <H3Title
            className="text-accent"
            animate={secondVisible ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
          >
            Открытый огонь и бескомпромиссное качество
          </H3Title>
          <div className="flex flex-col gap-2 overflow-hidden">
            <Paragraph
              animate={secondVisible ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
              delay={secondVisible ? 0.1 : 0}
            >
              Мы используем только мраморную говядину высших категорий и камеры сухого вызревания,
              чтобы раскрыть глубину вкуса. Каждое блюдо отражает наше стремление к идеалу и дарит
              гостям подлинное гастрономическое путешествие
            </Paragraph>
          </div>
        </div>
      </div>

      <Ornament className="col-span-5 py-12 md:col-span-3! md:col-start-8 md:justify-end! md:py-0" />
    </GridSection>
  )
}
