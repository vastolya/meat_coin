'use client'

import { useRef, useState } from 'react'
import AnimatedImage from './ui/AnimatedImage'
import H3Title from './ui/H3Title'
import AnimatedDiv from './ui/AnimatedDiv'

const cards = [
  {
    title: (
      <>
        Аутентичный в сердце <br className="md:hidden" /> Санкт-Петербурга
      </>
    ),
    src: '/about_02.webp',
    alt: 'Ресторан Meat_Coin в Санкт-Петербурге',
    label: 'Рубинштейна',
    labelPosition: 'items-end',
    imageHeight: 'h-98',
    titlePosition: 'top',
  },
  {
    title: 'Ресторан с панорамным видом на Садовое кольцо',
    src: '/about_03.webp',
    alt: 'Ресторан Meat_Coin в Москве',
    label: 'В центре Москвы',
    labelPosition: 'items-start',
    imageHeight: 'h-98',
    titlePosition: 'bottom',
  },
  {
    title: 'Флагманский загородный ресторан на берегу Финского залива',
    src: '/about_04.webp',
    alt: 'Загородный ресторан Meat_Coin в Комарово',
    label: 'Комарово',
    labelPosition: 'items-end',
    imageHeight: 'h-92.25',
    titlePosition: 'top',
  },
]

const AboutLocationsMobile = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = () => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cardWidth = scroller.querySelector('[data-location-card]')?.clientWidth ?? 1
    const gap = 8
    setActiveIndex(Math.round(scroller.scrollLeft / (cardWidth + gap)))
  }

  const scrollToCard = (index: number) => {
    const scroller = scrollerRef.current
    const card = scroller?.querySelectorAll<HTMLElement>('[data-location-card]')[index]

    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setActiveIndex(index)
  }

  return (
    <AnimatedDiv delay={0.2} className="col-span-5 md:hidden">
      <div
        ref={scrollerRef}
        onScroll={updateActiveIndex}
        className="flex snap-x gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <div
            key={card.src}
            data-location-card
            className="group flex w-86 shrink-0 cursor-pointer snap-start flex-col gap-2"
          >
            {card.titlePosition === 'top' && (
              <H3Title className="text-accent w-full">{card.title}</H3Title>
            )}
            <AnimatedImage
              src={card.src}
              alt={card.alt}
              className={`flex w-full rounded-lg p-2 ${card.imageHeight} ${card.labelPosition}`}
            >
              <p className="relative z-10 w-fit rounded-sm bg-black/30 p-3 text-sm leading-[116%] font-bold text-white backdrop-blur-sm">
                {card.label}
              </p>
            </AnimatedImage>
            {card.titlePosition === 'bottom' && (
              <H3Title className="text-accent w-full">{card.title}</H3Title>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {cards.map((card, index) => (
          <button
            key={card.src}
            type="button"
            aria-label={`Показать ресторан ${index + 1}`}
            aria-current={activeIndex === index}
            onClick={() => scrollToCard(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-border w-7' : 'border-border w-3 border'
            }`}
          />
        ))}
      </div>
    </AnimatedDiv>
  )
}

export default AboutLocationsMobile
