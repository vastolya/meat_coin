'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'

const SLIDES = [
  { location: 'Санкт-Петербург', name: 'Butcher & Grill', image: '/investors_02.webp' },
  { location: 'Комарово', name: 'Country Club', image: '/investors_03.webp' },
  { location: 'Москва', name: 'Steak & Terrace', image: '/investors_04.webp' },
  { location: 'Рублевка', name: 'Butcher & Grill', image: '/investors_05.webp' },
  { location: 'Газетный переулок', name: 'Country Club', image: '/investors_06.webp' },
  { location: 'Санкт-Петербург', name: 'Steak & Terrace', image: '/investors_07.webp' },
]

function SliderDot({
  isActive,
  label,
  onClick,
}: {
  isActive: boolean
  label: string
  onClick: () => void
}) {
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

export default function InvestorsSlider() {
  const rulerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (rulerRef.current) {
        setOffset(rulerRef.current.getBoundingClientRect().left)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // 4 dots: positions 0-2 snap to cards 0-2, position 3 snaps to the very end
  const DOT_COUNT = 4

  const getSnapPositions = (): number[] => {
    const slider = sliderRef.current
    if (!slider) return []
    const children = Array.from(slider.children) as HTMLElement[]
    return [
      ...Array.from({ length: DOT_COUNT - 1 }, (_, i) =>
        children[i] ? (children[i] as HTMLElement).offsetLeft - offset : 0
      ),
      slider.scrollWidth - slider.clientWidth,
    ]
  }

  const handleScroll = () => {
    const slider = sliderRef.current
    if (!slider) return
    const positions = getSnapPositions()
    if (!positions.length) return
    const closest = positions.reduce(
      (best, pos, i) =>
        Math.abs(pos - slider.scrollLeft) < Math.abs(positions[best] - slider.scrollLeft)
          ? i
          : best,
      0
    )
    if (closest !== activeIndex) setActiveIndex(closest)
  }

  const handleDotClick = (index: number) => {
    const slider = sliderRef.current
    if (!slider) return
    const positions = getSnapPositions()
    slider.scrollTo({ left: positions[index], behavior: 'smooth' })
    setActiveIndex(index)
  }

  const edgeStyle = {
    paddingLeft: offset,
    paddingRight: offset,
    scrollPaddingLeft: offset,
    scrollPaddingRight: offset,
  }

  return (
    <div>
      <div
        className="pointer-events-none mx-auto h-0 w-full overflow-hidden px-4 md:max-w-360 md:px-20"
        aria-hidden
      >
        <div ref={rulerRef} />
      </div>

      <div
        ref={sliderRef}
        style={edgeStyle}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-7 [&::-webkit-scrollbar]:hidden"
        onScroll={handleScroll}
      >
        {SLIDES.map((slide) => (
          <Link
            key={slide.location + slide.name}
            href="#"
            target="_blank"
            className="w-[85vw] shrink-0 snap-start md:w-102"
          >
            <div className="relative mb-4 h-80 w-full overflow-hidden rounded-sm md:h-105">
              <Paragraph className="bg-dark absolute top-2 left-2 z-20 rounded-sm px-2 py-1 text-white">
                {slide.location}
              </Paragraph>
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                className="z-10 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <H3Title>{slide.name}</H3Title>
          </Link>
        ))}
      </div>

      <div style={{ paddingLeft: offset }} className="mt-6 flex items-center gap-2">
        {Array.from({ length: DOT_COUNT }, (_, index) => (
          <SliderDot
            key={index}
            label={`Показать позицию ${index + 1}`}
            isActive={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
