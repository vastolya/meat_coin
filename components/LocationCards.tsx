'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionStyle } from 'motion/react'
import ArrowLink from '@/components/ui/ArrowLink'
import Tag from '@/components/ui/Tag'
import Paragraph from './ui/Paragraph'
import H2Title from './ui/H2Title'
import GridSection from './ui/GridSection'

const cards = [
  {
    city: 'Санкт-Петербург',
    name: 'Butcher&Grill',
    description:
      'История бренда началась именно здесь, на улице Рубинштейна. Здесь сформировался характер Meat_Coin. Аутентичное мясное меню, открытая кухня и одна из первых в городе камер сухого вызревания',
    bgClass: "bg-[url('/butcher.webp')]",
    href: '/locations/spb',
  },
  {
    city: 'Москва',
    name: 'Steak&Terrace',
    description:
      'Стейк-хаус с панорамной террасой в ТЦ «Смоленский Пассаж». Современная интерпретация классики и авторская подача в ритме столицы',
    bgClass: "bg-[url('/steak.webp')]",
    href: '/locations/moscow',
  },
  {
    city: 'Комарово',
    name: 'Country Club',
    description:
      'Загородный гриль-ресторан на берегу Финского залива. Идеальное место для семейного отдыха в окружении живописной природы. Уютный зал с камином, просторная терраса с видом на воду и детская комната',
    bgClass: "bg-[url('/country.webp')]",
    href: '/locations/komarovo',
  },
]

function CardInner({ card, nameStyle }: { card: (typeof cards)[0]; nameStyle?: MotionStyle }) {
  return (
    <div className="flex h-full flex-col">
      <div className="col-cols-5 mx-auto grid h-25 w-full max-w-360 shrink-0 items-center gap-3 px-4 md:grid-cols-12 md:gap-7 md:px-20">
        <div className="col-span-5 md:col-span-4">
          <Tag text={card.city} />
        </div>

        <motion.p
          className="col-span-7 flex w-fit items-end text-base leading-[148%] font-medium tracking-[1%]"
          style={nameStyle}
        >
          Meat_Coin&nbsp;
          <span className="text-2xl leading-[116%] font-extrabold">{card.name}</span>
        </motion.p>

        <div className="col-span-1 flex justify-end">
          <ArrowLink href={card.href} />
        </div>
      </div>
      <div className="mx-auto hidden w-full max-w-360 shrink-0 grid-cols-12 gap-7 px-20 pt-7 pb-7 md:grid">
        <Paragraph delay={0.2} className="col-span-8 col-start-5">
          {card.description}
        </Paragraph>
      </div>
      <div className={`min-h-0 w-full flex-1 bg-center md:bg-cover ${card.bgClass}`} />
    </div>
  )
}

export default function LocationCards() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const card2Y = useTransform(scrollYProgress, [0, 0.5, 1], ['100vh', '0vh', '0vh'])
  const card3Y = useTransform(scrollYProgress, [0, 0.5, 1], ['100vh', '100vh', '0vh'])

  const card1NameColor = useTransform(scrollYProgress, [0, 0.5], ['#ffffff', '#81807d'])
  const card2NameColor = useTransform(scrollYProgress, [0.5, 1], ['#ffffff', '#81807d'])

  return (
    <>
      <GridSection className="pt-12 pb-6 md:pt-30 md:pb-0">
        <Paragraph delay={0.2} className="text-gray col-span-5 md:col-span-4">
          География вкуса
        </Paragraph>
        <div className="col-span-5 flex flex-col gap-2 md:col-span-6">
          <H2Title delay={0.4}>стейк-хаусы Meat_Coin в Москве и Петербурге</H2Title>
          <Paragraph delay={0.6} className="text-gray col-span-4">
            Каждый наш ресторан имеет свой характер, но все они хранят верность
            <br />
            главному принципу — дарить гостям совершенный опыт знакомства с мясом
          </Paragraph>
        </div>
      </GridSection>

      <div ref={ref} className="h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-(--color-dark)">
          <div className="absolute inset-0 z-10">
            <CardInner card={cards[0]} nameStyle={{ color: card1NameColor }} />
          </div>

          <motion.div
            className="absolute top-25 right-0 bottom-0 left-0 z-20 bg-(--color-dark)"
            style={{ y: card2Y }}
          >
            <CardInner card={cards[1]} nameStyle={{ color: card2NameColor }} />
          </motion.div>

          <motion.div
            className="absolute top-50 right-0 bottom-0 left-0 z-30 bg-(--color-dark)"
            style={{ y: card3Y }}
          >
            <CardInner card={cards[2]} />
          </motion.div>
        </div>
      </div>
    </>
  )
}
