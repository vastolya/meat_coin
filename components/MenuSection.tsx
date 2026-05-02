'use client'

import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'motion/react'
import Button from '@/components/ui/Button'

const tabs = [
  { id: 'kitchen', label: 'Кухня' },
  { id: 'bar', label: 'Бар / Винная карта' },
] as const

type Tab = (typeof tabs)[number]['id']

const KITCHEN_CARDS = [
  {
    image: '/menu_01.webp',
    label: 'Рибай',
    text: 'Авторская кухня Meat_Coin — симбиоз турецких традиций и современных трендов',
  },
  {
    image: '/menu_02.webp',
    label: 'Вагю',
    text: 'Каждый стейк становится произведением искусства, а гриль-меню отражает философию уважения к мясу',
  },
  { image: '/menu_03.webp', label: 'Ти-бон', text: null },
  { image: '/menu_04.webp', label: 'На открытом огне', text: null },
]

const BAR_CARDS = [
  { image: '/bar_01.webp', label: 'Коллекция вин', text: null },
  {
    image: '/bar_02.webp',
    label: 'Коктейльная карта',
    text: 'Винная карта и коктейли собраны так, чтобы поддерживать вкус мяса и не спорить с ним',
  },
]

type CardData = { image: string; label: string; text: string | null }

function MenuCard({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: CardData
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const phases = Array.from({ length: total }, (_, i) => i / (total - 1))
  const STEP = 29.25
  const yValues = phases.map((_, j) => `${Math.max(0, index - j) * STEP}rem`)
  const y = useTransform(scrollYProgress, phases, yValues)

  return (
    <motion.div
      style={{
        y,
        zIndex: index + 1,
        top: `${index * 2.5}rem`,
        backgroundImage: `url(${card.image})`,
      }}
      className="absolute right-0 left-0 h-120 rounded-lg bg-cover bg-center"
    >
      <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
        {card.label}
      </div>
    </motion.div>
  )
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>('kitchen')
  const wrapperRef = useRef<HTMLDivElement>(null)

  const cards: CardData[] = activeTab === 'kitchen' ? KITCHEN_CARDS : BAR_CARDS
  const N = cards.length

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  const [activeText, setActiveText] = useState<string | null>(KITCHEN_CARDS[0].text)
  const [textKey, setTextKey] = useState(0)
  const [activeTextCardIdx, setActiveTextCardIdx] = useState(0)

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [bgPos, setBgPos] = useState<{ x: number; width: number } | null>(null)

  useLayoutEffect(() => {
    const idx = tabs.findIndex((t) => t.id === activeTab)
    const btn = tabRefs.current[idx]
    if (btn) setBgPos({ x: btn.offsetLeft, width: btn.offsetWidth })
  }, [activeTab])

  const cardsRef = useRef(cards)
  const activeTextRef = useRef(activeText)
  const activeTabRef = useRef(activeTab)

  useEffect(() => {
    cardsRef.current = cards
    activeTextRef.current = activeText
    activeTabRef.current = activeTab
  })

  useEffect(() => {
    setActiveText(cardsRef.current[0].text)
    setTextKey((k) => k + 1)
    setActiveTextCardIdx(0)
    if (wrapperRef.current) {
      const top = wrapperRef.current.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, behavior: 'instant' })
    }
  }, [activeTab])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const currentCards = cardsRef.current
    const currentN = currentCards.length
    let currentPhases: number[]
    if (activeTabRef.current === 'kitchen') {
      const denom = currentN * (currentN - 1)
      currentPhases = Array.from({ length: currentN }, (_, i) => (i * (i + 1)) / denom)
    } else {
      currentPhases = Array.from({ length: currentN }, (_, i) => i / Math.max(currentN - 1, 1))
    }
    const phaseIdx = [...currentPhases].reverse().findIndex((p) => v >= p)
    const cardIdx = phaseIdx === -1 ? 0 : currentPhases.length - 1 - phaseIdx
    const newText = currentCards[cardIdx]?.text
    if (newText && newText !== activeTextRef.current) {
      setActiveText(newText)
      setTextKey((k) => k + 1)
      setActiveTextCardIdx(cardIdx)
    }
  })

  const containerH = 30 + (N - 1) * 2.5
  const textBottom = containerH - 30 - activeTextCardIdx * 2.5

  return (
    <section className="rounded-t-[7.5rem] bg-(--color-beige) text-(--color-dark)">
      <div ref={wrapperRef} style={{ height: `${(N + 1) * 100}vh` }}>
        <div className="sticky top-0 h-fit rounded-t-[7.5rem] bg-(--color-beige)">
          <div className="relative mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30 pb-18">
            <div className="absolute top-72 left-20 flex rounded-sm bg-white p-1 text-base leading-[148%] font-medium tracking-[1%]">
              {bgPos && (
                <motion.div
                  className="bg-accent absolute top-1 bottom-1 left-0 rounded-sm"
                  animate={{ x: bgPos.x, width: bgPos.width }}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  ref={(el) => { tabRefs.current[idx] = el }}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative rounded-sm px-6 py-2"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      activeTab === tab.id ? 'text-white' : 'text-accent'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="col-span-4 flex gap-2">
              <Button text="Меню" variant="secondary" />
              <Button text="Винная карта" variant="secondary" />
            </div>
            <h2 className="font-albertus col-span-8 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
              Авторская кухня и турецкие традиции мясников
            </h2>
          </div>

          <div className="mx-auto grid max-w-360 grid-cols-12 items-start gap-7 px-20 pb-30">
            <div className="relative col-span-4" style={{ height: `${containerH}rem` }}>
              <AnimatePresence mode="wait">
                {activeText && (
                  <motion.p
                    key={textKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ bottom: `${textBottom}rem` }}
                    className="absolute right-0 left-0 text-base leading-[148%] font-medium tracking-[1%]"
                  >
                    {activeText}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="relative col-span-8"
                style={{ height: `${containerH}rem` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {cards.map((card, i) => (
                  <MenuCard
                    key={card.label}
                    card={card}
                    index={i}
                    total={N}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
