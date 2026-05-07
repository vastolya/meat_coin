'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Tag from './ui/Tag'
import Button from './ui/Button'
import GridSection from './ui/GridSection'
import H2Title from './ui/H2Title'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'

const spring = { type: 'spring', stiffness: 80, damping: 15 } as const
const vis = { opacity: 1, x: 0 }
const hid = { opacity: 0, x: 40 }

function ImgBlock({ src, className }: { src: string; className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={spring}
      className={`rounded-lg bg-cover ${className}`}
      style={{ backgroundImage: `url('/${src}')` }}
    />
  )
}

function HScroll({ images }: { images: string[] }) {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className={`h-119 w-70 shrink-0 snap-start rounded-lg bg-contain bg-center bg-no-repeat ${i === 0 ? 'ml-4' : 'ml-2'} ${i === images.length - 1 ? 'mr-4' : ''}`}
          style={{ backgroundImage: `url('/${src}')` }}
        />
      ))}
    </div>
  )
}

export default function EventsSection() {
  const [active, setActive] = useState([false, false, false, false])
  const ref0 = useRef<HTMLDivElement>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const entries = [ref0, ref1, ref2, ref3]
    const observers = entries.map((ref, i) => {
      if (!ref.current) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive((prev) => prev.map((v, j) => (j === i ? true : v)))
          } else if (entry.boundingClientRect.top > 0) {
            setActive((prev) => prev.map((v, j) => (j === i ? false : v)))
          }
        },
        { threshold: 0, rootMargin: '0px 0px -45% 0px' }
      )
      obs.observe(ref.current)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <>
      {/* ── Mobile ─────────────────────────────────────────── */}
      <section className="flex flex-col gap-10 px-4 pt-12 pb-12 md:hidden">
        <H2Title>
          <span className="text-accent">Meat_Coin —&nbsp;</span> пространство для ваших мероприятий
          в Москве и Санкт-Петербурге
        </H2Title>

        <div className="flex flex-col gap-6">
          <div
            className="h-75 rounded-lg bg-cover"
            style={{ backgroundImage: "url('/event_01.webp')" }}
          />
          <H3Title>
            Рестораны Meat_Coin идеальны <br /> для проведения
          </H3Title>
          <div className="flex flex-wrap gap-1">
            <Tag text="Свадьба" /> <Tag text="Юбилей" /> <Tag text="Корпоратив" />
            <Tag text="Деловой ужин" />
          </div>
          <H3Title>
            Панорамная терраса в Москве, вип-зал, летняя терраса и беседки в Комарово, атмосфера
            первого ресторана на Рубинштейна
          </H3Title>
          <Paragraph>Каждая локация создаёт уникальный фон для вашего торжества</Paragraph>
          <HScroll images={['event_02.webp', 'event_03.webp', 'event_05.webp']} />
        </div>

        <div className="flex flex-col gap-4">
          <div
            className="h-50 rounded-lg bg-cover"
            style={{ backgroundImage: "url('/event_04.webp')" }}
          />
          <H3Title>Наша команда поможет организовать событие любого уровня сложности</H3Title>
          <div className="flex flex-wrap gap-1">
            <Tag text="Камерный ужин" /> <Tag text="Масштабный гала-вечер" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className="h-75 rounded-lg bg-cover"
            style={{ backgroundImage: "url('/event_06.webp')" }}
          />
          <Paragraph className="text-gray">
            Мы предлагаем персональное меню, разработанное шеф-поварами, <br /> помощь в подборе вин
            и полное сопровождение
          </Paragraph>
          <Link href={'/'} className="hover:text-accent transition-all duration-300">
            <Paragraph>Подробнее о событиях</Paragraph>
          </Link>
          <div className="flex flex-col gap-2">
            <Link href={'/'}>
              <Button text="Комарово" variant="secondary" className="w-full text-white" />
            </Link>
            <Link href={'/'}>
              <Button text="Москва" variant="secondary" className="w-full text-white" />
            </Link>
            <Link href={'/'}>
              <Button text="Санкт-Петербург" variant="secondary" className="w-full text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop ─────────────────────────────────────────── */}
      <div className="hidden md:block">
        <GridSection className="py-30">
          <H2Title className="col-span-8 col-start-5 row-start-1 pb-10">
            <span className="text-accent">Meat_Coin —&nbsp;</span> пространство для ваших
            мероприятий в Москве и Санкт-Петербурге
          </H2Title>

          {/* Left — images scroll */}
          <div className="col-span-4 col-start-1 row-start-2 flex flex-col gap-7">
            <div ref={ref0}>
              <ImgBlock src="event_01.webp" className="h-75" />
            </div>
            <div ref={ref1}>
              <ImgBlock src="event_02.webp" className="h-119" />
            </div>
            <div ref={ref2}>
              <ImgBlock src="event_03.webp" className="h-174" />
            </div>
            <div ref={ref3} className="flex flex-col gap-7">
              <ImgBlock src="event_05.webp" className="h-119" />
              <ImgBlock src="event_06.webp" className="h-86" />
            </div>
          </div>

          {/* Right — sticky, accumulates blocks */}
          <div className="col-span-8 col-start-5 row-start-2 self-start md:sticky md:top-20">
            <div className="flex flex-col gap-8">
              {/* Block 1 */}
              <div className="flex flex-col gap-2">
                <H3Title animate={active[0] ? vis : hid}>
                  Рестораны Meat_Coin идеальны <br /> для проведения
                </H3Title>
                <motion.div
                  initial={hid}
                  animate={active[0] ? vis : hid}
                  transition={{ ...spring, delay: 0.1 }}
                  className="flex flex-wrap gap-2"
                >
                  <Tag text="Свадьба" /> <Tag text="Юбилей" /> <Tag text="Корпоратив" />
                  <Tag text="Деловой ужин" />
                </motion.div>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col gap-4">
                <H3Title animate={active[1] ? vis : hid}>
                  Панорамная терраса в Москве, вип-зал, летняя терраса и беседки в Комарово,
                  атмосфера первого ресторана на Рубинштейна
                </H3Title>
                <Paragraph animate={active[1] ? vis : hid} delay={0.1}>
                  Каждая локация создаёт уникальный фон для вашего торжества
                </Paragraph>
              </div>

              {/* Block 3 */}
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={active[2] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={spring}
                  className="h-119 rounded-lg bg-cover"
                  style={{ backgroundImage: "url('/event_04.webp')" }}
                />
                <H3Title animate={active[2] ? vis : hid}>
                  Наша команда поможет организовать событие любого уровня сложности
                </H3Title>
                <motion.div
                  initial={hid}
                  animate={active[2] ? vis : hid}
                  transition={{ ...spring, delay: 0.1 }}
                  className="flex gap-2"
                >
                  <Tag text="Камерный ужин" /> <Tag text="Масштабный гала-вечер" />
                </motion.div>
              </div>

              {/* Block 4 */}
              <div className="flex flex-col gap-4">
                <Paragraph animate={active[3] ? vis : hid} className="text-gray">
                  Мы предлагаем персональное меню, разработанное шеф-поварами, <br /> помощь в
                  подборе вин и полное сопровождение
                </Paragraph>
                <motion.div
                  initial={hid}
                  animate={active[3] ? vis : hid}
                  transition={{ ...spring, delay: 0.1 }}
                  className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0"
                >
                  <Link
                    href={'/'}
                    className="hover:text-accent whitespace-nowrap transition-all duration-300"
                  >
                    <Paragraph disableAnimation>Подробнее о событиях</Paragraph>
                  </Link>
                  <div className="flex w-full flex-col justify-end gap-2 md:flex-row">
                    <Link href={'/'}>
                      <Button text="Комарово" variant="secondary" className="w-full text-white" />
                    </Link>
                    <Link href={'/'}>
                      <Button text="Москва" variant="secondary" className="w-full text-white" />
                    </Link>
                    <Link href={'/'}>
                      <Button
                        text="Санкт-Петербург"
                        variant="secondary"
                        className="w-full text-white"
                      />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </GridSection>
      </div>
    </>
  )
}
