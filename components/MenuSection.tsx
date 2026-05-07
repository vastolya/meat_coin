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
import GridSection from '@/components/ui/GridSection'
import H2Title from './ui/H2Title'
import Paragraph from './ui/Paragraph'

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
  {
    image: '/bar_01.webp',
    label: 'Коллекция вин',
    text: 'Винная карта и коктейли собраны так, чтобы поддерживать вкус мяса и не спорить с ним',
  },
  {
    image: '/bar_02.webp',
    label: 'Коктейльная карта',
    text: null,
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

function MobileMenuCard({ card }: { card: CardData }) {
  return (
    <div
      style={{ backgroundImage: `url(${card.image})` }}
      className="relative mb-4 h-104.5 w-[calc(90vw)] shrink-0 snap-start rounded-lg bg-cover bg-center"
    >
      <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
        {card.label}
      </div>
    </div>
  )
}

function getEffectiveText(cards: CardData[], idx: number): string | null {
  for (let i = idx; i >= 0; i--) {
    if (cards[i].text) return cards[i].text
  }
  return null
}

type SliderDotProps = {
  isActive: boolean
  label: string
  onClick: () => void
}

function SliderDot({ isActive, label, onClick }: SliderDotProps) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      animate={{
        width: isActive ? '2rem' : '1rem',
        backgroundColor: isActive ? 'var(--color-devider)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      className="h-4 rounded-full border border-(--color-devider)"
      onClick={onClick}
    />
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
  const isMounted = useRef(false)

  useEffect(() => {
    cardsRef.current = cards
    activeTextRef.current = activeText
    activeTabRef.current = activeTab
  })

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
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

  // Mobile slider
  const mobileSliderRef = useRef<HTMLDivElement>(null)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)

  const handleMobileScroll = () => {
    const slider = mobileSliderRef.current
    if (!slider) return
    const children = Array.from(slider.children) as HTMLElement[]
    if (!children.length) return
    const closest = children.reduce((best, card, i) => {
      const d = Math.abs(card.offsetLeft - slider.scrollLeft)
      const bd = Math.abs(children[best].offsetLeft - slider.scrollLeft)
      return d < bd ? i : best
    }, 0)
    if (closest !== mobileActiveIndex) setMobileActiveIndex(closest)
  }

  const handleDotClick = (index: number) => {
    const slider = mobileSliderRef.current
    const target = slider?.children[index] as HTMLElement | undefined
    if (!slider || !target) return
    slider.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    setMobileActiveIndex(index)
  }

  useEffect(() => {
    setMobileActiveIndex(0)
    mobileSliderRef.current?.scrollTo({ left: 0, behavior: 'instant' })
  }, [activeTab])

  return (
    <section className="rounded-t-[3.75rem] bg-(--color-beige) text-(--color-dark) md:rounded-t-[7.5rem]">
      {/* Desktop: scroll-based stacking animation */}
      <div ref={wrapperRef} style={{ height: `${(N + 1) * 60}vh` }} className="hidden md:block">
        <div className="sticky top-0 h-fit rounded-t-[7.5rem] bg-(--color-beige)">
          <GridSection className="relative pt-30 pb-18">
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
                  ref={(el) => {
                    tabRefs.current[idx] = el
                  }}
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
              <Button text="Меню" variant="secondary" href="/menu.pdf" />
              <Button text="Винная карта" variant="secondary" href="/bar.pdf" />
            </div>
            <h2 className="font-albertus col-span-8 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
              Авторская кухня и турецкие традиции мясников
            </h2>
          </GridSection>

          <GridSection className="items-start pb-30">
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
          </GridSection>
        </div>
      </div>

      {/* Mobile: horizontal snap-scroll slider */}
      <div className="md:hidden">
        <GridSection className="pt-16 pb-4">
          <Paragraph className="text-gray col-span-5">География вкуса</Paragraph>
          <H2Title className="col-span-5">Авторская кухня и турецкие традиции мясников</H2Title>

          <div className="col-span-5 mt-7 flex rounded-sm bg-white p-1 text-sm leading-[148%] font-medium tracking-[1%]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 rounded-sm px-3 py-2 text-center transition-colors duration-200 ${
                  activeTab === tab.id ? 'bg-accent text-white' : 'text-accent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </GridSection>

        <div
          ref={mobileSliderRef}
          className="ml-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={handleMobileScroll}
        >
          {cards.map((card) => (
            <MobileMenuCard key={card.label} card={card} />
          ))}
        </div>

        {cards.some((c) => c.text) && (
          <div className="grid px-4">
            {cards
              .filter((c) => c.text)
              .map((c) => (
                <p
                  key={c.text}
                  style={{ gridArea: '1/1' }}
                  className={`text-base leading-[148%] font-medium tracking-[1%] transition-opacity duration-300 ${
                    c.text === getEffectiveText(cards, mobileActiveIndex)
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  {c.text}
                </p>
              ))}
          </div>
        )}

        <div className="mt-4 mb-8 flex items-center justify-center gap-2">
          {cards.map((card, index) => (
            <SliderDot
              key={card.label}
              label={`Показать карточку ${index + 1}`}
              isActive={index === mobileActiveIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <div className="col-span-5 flex w-full gap-2 px-4 pb-12">
          <Button text="Меню" variant="secondary" className="w-full" />
          <Button text="Винная карта" variant="secondary" className="w-full" />
        </div>
      </div>
    </section>
  )
}
