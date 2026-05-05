'use client'

import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const CARD = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

const CARDS_STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}

type Chef = {
  name: string
  restaurant: string
  role: string
  city: string
  bgClass: string
  idx?: number
  className?: string
}

const chefs: Chef[] = [
  {
    name: 'Ариф Найджи',
    restaurant: 'Country Club',
    role: 'Бренд-шеф Meat_Coin',
    city: 'Комарово',
    bgClass: "bg-[url('/arif.webp')]",
  },
  {
    name: 'Мехмет Найджи',
    restaurant: 'Steak & Terrace',
    role: 'Авторский подход и баланс вкуса в столичном формате',
    city: 'Москва',
    bgClass: "bg-[url('/mahmet.webp')]",
  },
  {
    name: 'Толга Мюрекепчи',
    restaurant: 'Butcher & Grill',
    role: 'Точность работы с мясом и энергия открытой кухни',
    city: 'Санкт-Петербург',
    bgClass: "bg-[url('/tolga.webp')]",
  },
]

function ChefCard({ name, restaurant, role, city, bgClass, idx, className = '' }: Chef) {
  return (
    <motion.div className={`flex flex-col gap-4 ${className}`} variants={CARD}>
      <div
        className={`relative h-117 w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-cover bg-center md:h-191 ${bgClass}`}
      >
        <div className="absolute bottom-2 left-2">
          <Tag text={city} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <H3Title delay={idx && idx * 0.2} className="text-2xl">
          {name}
        </H3Title>
        <H3Title delay={idx && idx * 0.2} className="text-2xl text-(--color-accent)">
          {restaurant}
        </H3Title>
        <Paragraph delay={idx && idx * 0.2} className="text-gray">
          {role}
        </Paragraph>
      </div>
    </motion.div>
  )
}

type SliderDotProps = {
  isActive: boolean
  label: string
  onClick: () => void
}

function SliderDot({ isActive, label, onClick }: SliderDotProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`rounded-full border border-(--color-devider) transition-colors ${
        isActive ? 'h-4 w-8 bg-(--color-devider)' : 'h-4 w-4 bg-transparent'
      }`}
      onClick={onClick}
    />
  )
}

export default function ChefsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSliderScroll = () => {
    const slider = sliderRef.current

    if (!slider) return

    const cards = Array.from(slider.children) as HTMLElement[]

    if (cards.length === 0) return

    const closestIndex = cards.reduce((bestIndex, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - slider.scrollLeft)
      const bestDistance = Math.abs(cards[bestIndex].offsetLeft - slider.scrollLeft)

      return currentDistance < bestDistance ? index : bestIndex
    }, 0)

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex)
    }
  }

  const handleDotClick = (index: number) => {
    const slider = sliderRef.current
    const targetCard = slider?.children[index] as HTMLElement | undefined

    if (!slider || !targetCard) return

    slider.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }

  return (
    <GridSection className="pt-0pb-0md:pt-30 md:pb-35">
      <Paragraph delay={0.2} className="text-gray col-span-5 md:col-span-4">
        Хранители традиций
      </Paragraph>
      <div className="col-span-5 flex flex-col gap-2 md:col-span-8">
        <H2Title delay={0.4}>Шеф-повара Meat_Coin</H2Title>
        <Paragraph delay={0.6}>
          <span className="text-(--color-accent)">Команду Meat_Coin возглавляют шефы</span>
          <br className="md:hidden" />с турецкой школой <br className="hidden md:block" /> и
          глубоким пониманием ремесла
        </Paragraph>
      </div>

      <motion.div
        ref={sliderRef}
        className="col-span-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-6 [-ms-overflow-style:none] [scrollbar-width:none] md:col-span-12 md:mt-18 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:pr-0 [&::-webkit-scrollbar]:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={CARDS_STAGGER}
        onScroll={handleSliderScroll}
      >
        {chefs.map((chef, index) => (
          <ChefCard
            key={chef.name}
            {...chef}
            idx={index}
            className="w-[calc(100%-2rem)] shrink-0 snap-start md:w-auto md:shrink md:snap-none"
          />
        ))}
      </motion.div>

      <div className="col-span-5 mt-6 flex items-center justify-center gap-2 md:hidden">
        {chefs.map((chef, index) => (
          <SliderDot
            key={chef.name}
            label={`Показать карточку ${index + 1}`}
            isActive={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </GridSection>
  )
}
