'use client'

import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import ArrowLink from '@/components/ui/ArrowLink'
import Tag from '@/components/ui/Tag'
import Paragraph from './ui/Paragraph'
import H2Title from './ui/H2Title'
import GridSection from './ui/GridSection'

// h-25 = 6.25rem = 100px — высота строки с тегом/названием
const CARD_HEADER_H = 100

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

function CardContent({ card }: { card: (typeof cards)[0] }) {
  return (
    <>
      <div className="col-cols-5 mx-auto grid h-25 w-full max-w-360 items-center gap-3 px-4 md:grid-cols-12 md:gap-7 md:px-20">
        <div className="col-span-5 md:col-span-4">
          <Tag text={card.city} />
        </div>
        <div className="col-span-7 flex w-full items-center justify-between pb-7 md:items-end md:pb-0">
          <Paragraph>
            Meat_Coin&nbsp;
            <span className="text-2xl leading-[116%] font-extrabold">{card.name}</span>
          </Paragraph>
          <div className="flex md:hidden">
            <ArrowLink href={card.href} />
          </div>
        </div>
        <div className="col-span-1 hidden justify-end md:flex">
          <ArrowLink href={card.href} />
        </div>
      </div>
      <div className="mx-auto hidden w-full max-w-360 grid-cols-12 gap-7 px-20 pt-7 pb-7 md:grid">
        <Paragraph delay={0.2} className="col-span-8 col-start-5">
          {card.description}
        </Paragraph>
      </div>
      <div
        className={`h-[calc(100dvh-100px)] w-full bg-cover bg-center md:h-[70vh] ${card.bgClass}`}
      />
    </>
  )
}

export default function LocationCards() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [headerH, setHeaderH] = useState(0)
  const [cardH, setCardH] = useState(660)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useLayoutEffect(() => {
    const headerEl = headerRef.current
    const cardEl = cardRef.current
    if (!headerEl || !cardEl) return

    const update = () => {
      setHeaderH(headerEl.offsetHeight)
      setCardH(cardEl.offsetHeight)
    }
    update()

    const ro = new ResizeObserver(update)
    ro.observe(headerEl)
    ro.observe(cardEl)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  const card2Y = useTransform(scrollYProgress, [0, 0.4], ['100vh', '0vh'])
  const card3Y = useTransform(scrollYProgress, [0.4, 0.8], ['100vh', '0vh'])

  // Высота собранного стека: хвостики карточек 1–2 + полная карточка 3
  const assembledH = CARD_HEADER_H * (cards.length - 1) + cardH

  return (
    <div className="bg-(--color-dark)">
      {/* Секция-заголовок: sticky только на десктопе */}
      <div ref={headerRef} className="z-0 bg-(--color-dark) md:sticky md:top-0">
        <GridSection className="pt-12 pb-6 md:pt-18 md:pb-6">
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
      </div>

      {/* Scroll-контейнер: задаёт длину анимации сборки */}
      <div ref={scrollRef} className="h-[300vh]">
        {/* Единый sticky-блок — весь стек уходит наверх как одно целое */}
        <div
          className="sticky overflow-hidden bg-(--color-dark)"
          style={{ top: isMobile ? 0 : headerH, height: assembledH }}
        >
          {/* Карточка 1 — всегда видна в основании стека */}
          <div ref={cardRef} className="absolute inset-x-0 top-0 z-1 bg-(--color-dark)">
            <CardContent card={cards[0]} />
          </div>

          {/* Карточка 2 — заезжает снизу, оставляет 100px хвостик карточки 1 */}
          <motion.div
            className="absolute inset-x-0 top-[100px] z-2 bg-(--color-dark)"
            style={{ y: card2Y }}
          >
            <CardContent card={cards[1]} />
          </motion.div>

          {/* Карточка 3 — заезжает снизу, оставляет хвостики 1 и 2 */}
          <motion.div
            className="absolute inset-x-0 top-[200px] z-3 bg-(--color-dark)"
            style={{ y: card3Y }}
          >
            <CardContent card={cards[2]} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
