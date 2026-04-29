'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionStyle } from 'motion/react'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Tag from '@/components/ui/Tag'

const SLIDE = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const cards = [
  {
    city: 'Санкт-Петербург',
    name: 'Butcher&Grill',
    description:
      'История бренда началась именно здесь, на улице Рубинштейна. Здесь сформировался характер Meat_Coin. Аутентичное мясное меню, открытая кухня и одна из первых в городе камер сухого вызревания',
    bgClass: "bg-[url('/butcher.webp')]",
  },
  {
    city: 'Москва',
    name: 'Steak&Terrace',
    description:
      'Стейк-хаус с панорамной террасой в ТЦ «Смоленский Пассаж». Современная интерпретация классики и авторская подача в ритме столицы',
    bgClass: "bg-[url('/steak.webp')]",
  },
  {
    city: 'Комарово',
    name: 'Country Club',
    description:
      'Загородный гриль-ресторан на берегу Финского залива. Идеальное место для семейного отдыха в окружении живописной природы. Уютный зал с камином, просторная терраса с видом на воду и детская комната',
    bgClass: "bg-[url('/country.webp')]",
  },
]

function CardInner({
  card,
  nameStyle,
}: {
  card: (typeof cards)[number]
  nameStyle?: MotionStyle
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-auto grid h-[100px] w-full max-w-360 shrink-0 grid-cols-12 items-center gap-7 px-20">
        <div className="col-span-4">
          <Tag text={card.city} />
        </div>
        <div className="col-span-7">
          <motion.p
            className="flex w-fit items-end text-base leading-[148%] font-medium tracking-[1%]"
            style={nameStyle}
          >
            Meat_Coin&nbsp;
            <span className="text-2xl leading-[116%] font-extrabold">{card.name}</span>
          </motion.p>
        </div>
        <div className="col-span-1 flex justify-end">
          <ArrowIcon height={24} width={24} />
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-360 shrink-0 grid-cols-12 gap-7 px-20 pt-7 pb-7">
        <div className="col-span-8 col-start-5">
          <p className="text-base leading-[148%] font-medium tracking-[1%]">{card.description}</p>
        </div>
      </div>
      <div className={`min-h-0 w-full flex-1 bg-cover ${card.bgClass}`} />
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

  // Card 1 name fades to gray as Card 2 slides in (0 → 0.5)
  const card1NameColor = useTransform(scrollYProgress, [0, 0.5], ['#ffffff', '#81807d'])
  // Card 2 name fades to gray as Card 3 slides in (0.5 → 1)
  const card2NameColor = useTransform(scrollYProgress, [0.5, 1], ['#ffffff', '#81807d'])

  return (
    <>
      <motion.section
        className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p
          className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]"
          variants={SLIDE}
        >
          География вкуса
        </motion.p>
        <div className="col-span-6 flex flex-col gap-2">
          <motion.h2
            className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase"
            variants={SLIDE}
          >
            стейк-хаусы Meat_Coin в Москве и Петербурге
          </motion.h2>
          <motion.p
            className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]"
            variants={SLIDE}
          >
            Каждый наш ресторан имеет свой характер, но все они хранят верность
            <br />
            главному принципу — дарить гостям совершенный опыт знакомства с мясом
          </motion.p>
        </div>
      </motion.section>

    <div ref={ref} className="h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-(--color-dark)">
        {/* Card 1 — base layer, always fills the panel */}
        <div className="absolute inset-0 z-10">
          <CardInner card={cards[0]} nameStyle={{ color: card1NameColor }} />
        </div>

        {/* Card 2 — slides up from bottom, covers Card 1's content */}
        <motion.div
          className="absolute top-[100px] right-0 bottom-0 left-0 z-20 bg-(--color-dark)"
          style={{ y: card2Y }}
        >
          <CardInner card={cards[1]} nameStyle={{ color: card2NameColor }} />
        </motion.div>

        {/* Card 3 — slides up from bottom, covers Cards 1 & 2's content */}
        <motion.div
          className="absolute top-[200px] right-0 bottom-0 left-0 z-30 bg-(--color-dark)"
          style={{ y: card3Y }}
        >
          <CardInner card={cards[2]} />
        </motion.div>
      </div>
    </div>
    </>
  )
}
