'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import GridSection from '@/components/ui/GridSection'
import PillTabs from '@/components/ui/PillTabs'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import Paragraph from '@/components/ui/Paragraph'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedImage from '@/components/ui/AnimatedImage'
import LocationIcon from '@/components/icons/LocationIcon'
import InfoIcon from '@/components/icons/InfoIcon'
import H3Title from '@/components/ui/H3Title'
import ArrowIcon from '@/components/icons/ArrowIcon'
import { DISHES, type Dish } from '@/consts/menu'

const CATEGORIES = [
  { id: 'breakfast', label: 'Завтраки' },
  { id: 'lunch', label: 'Закуски' },
  { id: 'dinner', label: 'Салаты' },
  { id: 'steaks', label: 'Стейки' },
  { id: 'bar', label: 'Бар / Винная карта' },
  { id: 'desserts', label: 'Десерты' },
]

const LOCATIONS = ['Комарово', 'Москва', 'Санкт-Петербург']

function getCardLayout(index: number): { col: string; aspect: string } {
  const pos = index % 8
  if (pos === 0)
    return { col: 'col-span-5 md:col-span-8', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  if (pos === 1)
    return { col: 'col-span-5 md:col-span-4', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  if (pos === 6)
    return { col: 'col-span-5 md:col-span-4', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  if (pos === 7)
    return { col: 'col-span-5 md:col-span-8', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  return { col: 'col-span-5 md:col-span-3', aspect: 'aspect-square md:aspect-none md:h-[300px]' }
}

function LocationDropdown() {
  const [selected, setSelected] = useState('Комарово')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5"
      >
        <LocationIcon color="var(--color-accent)" width={20} height={20} />
        <Paragraph className="decoration-accent text-accent underline" disableAnimation>
          {selected}
        </Paragraph>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="bg-beige absolute top-full left-0 z-50 mt-2 flex min-w-[200px] flex-col overflow-hidden rounded-sm"
          >
            {LOCATIONS.filter((loc) => loc !== selected).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => {
                  setSelected(loc)
                  setOpen(false)
                }}
                className="hover:text-accent cursor-pointer px-5 py-3 text-left transition-colors duration-200"
              >
                <Paragraph disableAnimation>{loc}</Paragraph>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LoadMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      initial="rest"
      whileHover="hovered"
      onClick={onClick}
      className="hover:text-accent flex cursor-pointer items-center gap-2 transition-colors duration-300"
    >
      <Paragraph disableAnimation>Загрузить ещё</Paragraph>
      <motion.span
        className="inline-flex"
        variants={{ rest: { x: 0 }, hovered: { x: 6 } }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <ArrowIcon width={24} height={24} />
      </motion.span>
    </motion.button>
  )
}

function DishCard({ dish, index, aspect }: { dish: Dish; index: number; aspect: string }) {
  return (
    <AnimatedDiv delay={index * 0.05} className="group flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-sm bg-(--color-devider) ${aspect}`}>
        <AnimatedImage
          src={dish.image}
          alt={dish.name}
          className="h-full w-full"
          imgClsx="object-cover transition-transform duration-500 group-hover:scale-105"
          disableAnimation
        />
        <div className="absolute bottom-4 left-4 flex flex-col gap-1">
          <H3Title className="text-white">{dish.name}</H3Title>
          <Paragraph className="text-border text-sm">{dish.weight}</Paragraph>
        </div>
      </div>
    </AnimatedDiv>
  )
}

function BarMenuContent({
  visible,
  hasMore,
  onLoadMore,
}: {
  visible: Dish[]
  hasMore: boolean
  onLoadMore: () => void
}) {
  return (
    <>
      {/* Row 1: [wine text 4] [card 4] [card 4] */}
      <div className="col-span-4 flex flex-col gap-4">
        <H3Title>Винная карта и коктейльная культура</H3Title>
        <div className="flex flex-col gap-2">
          <Paragraph>
            Наш винный ресторан в центре Петербурга предлагает более 100 позиций из Старого и Нового
            Света.
          </Paragraph>
          <Paragraph>
            Сомелье поможет подобрать идеальную пару к стейку или закуске, а для любителей более
            смелых сочетаний — авторские коктейли от наших барменов.
          </Paragraph>
        </div>
      </div>
      {visible.slice(0, 2).map((dish, i) => (
        <div key={dish.id} className="col-span-5 md:col-span-4">
          <DishCard dish={dish} index={i} aspect="aspect-square md:aspect-none md:h-[476px]" />
        </div>
      ))}

      {/* Row 2: [card 3] × 4 */}
      {visible.slice(2, 6).map((dish, i) => (
        <div key={dish.id} className="col-span-5 md:col-span-3">
          <DishCard dish={dish} index={i + 2} aspect="aspect-square md:aspect-none md:h-[300px]" />
        </div>
      ))}

      {/* Row 3: [card 4] [card 4] [cocktail text 4] */}
      {visible.slice(6, 8).map((dish, i) => (
        <div key={dish.id} className="col-span-5 md:col-span-4">
          <DishCard dish={dish} index={i + 6} aspect="aspect-square md:aspect-none md:h-[380px]" />
        </div>
      ))}
      {visible[6] && (
        <div className="col-span-4 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <H3Title>Авторские коктейли от наших барменов</H3Title>
            <Paragraph>Коктейльная карта обновляется каждый сезон</Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <Paragraph>Мы используем премиальный алкоголь, свежие фрукты, ягоды и травы</Paragraph>
            <Paragraph>
              Попробуйте наши бестселлеры или доверьтесь фантазии бармена — он создаст напиток
              специально для вас
            </Paragraph>
          </div>
        </div>
      )}

      {/* Row 4 (initial): [card 3] × 4 */}
      {visible.slice(8, 12).map((dish, i) => (
        <div key={dish.id} className="col-span-5 md:col-span-3">
          <DishCard dish={dish} index={i + 8} aspect="aspect-square md:aspect-none md:h-[300px]" />
        </div>
      ))}

      {/* Loaded more: same cycle as food menu */}
      {visible.slice(12).map((dish, i) => {
        const { col, aspect } = getCardLayout(i)
        return (
          <div key={dish.id} className={col}>
            <DishCard dish={dish} index={i + 12} aspect={aspect} />
          </div>
        )
      })}

      {hasMore && (
        <div className="col-span-5 flex justify-center md:col-span-12">
          <LoadMoreButton onClick={onLoadMore} />
        </div>
      )}
    </>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('breakfast')
  const [visibleCount, setVisibleCount] = useState(8)

  const isBar = activeCategory === 'bar'

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id)
    setVisibleCount(id === 'bar' ? 12 : 8)
  }, [])

  const filtered = useMemo(
    () => DISHES.filter((d) => d.category === activeCategory),
    [activeCategory]
  )
  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount])
  const hasMore = visibleCount < filtered.length

  const activeLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label

  return (
    <main className="bg-(--color-beige) text-(--color-dark)">
      <GridSection className="pt-18 pb-20">
        <div className="col-span-4 flex flex-col gap-2 pb-20">
          <Paragraph className="text-gray">
            Выбирайте другой ресторан, <br /> чтобы изучить меню
          </Paragraph>
          <LocationDropdown />
        </div>

        <H1Title className="col-span-5 md:col-span-8">
          {isBar ? 'Винная карта и коктейльная культура' : 'Меню'}
        </H1Title>

        <div className="col-span-12 mx-auto">
          <PillTabs
            tabs={CATEGORIES}
            activeId={activeCategory}
            onChange={handleCategoryChange}
            className="w-fit"
          />
        </div>

        <div className="col-span-12 flex justify-between">
          <H2Title>{activeLabel}</H2Title>
          <InfoIcon className="text-border h-5 w-5 md:h-6 md:w-6" />
        </div>

        {isBar ? (
          <BarMenuContent
            visible={visible}
            hasMore={hasMore}
            onLoadMore={() => setVisibleCount((v) => v + 8)}
          />
        ) : (
          <>
            {visible.map((dish, i) => {
              const { col, aspect } = getCardLayout(i)
              return (
                <div key={dish.id} className={col}>
                  <DishCard dish={dish} index={i} aspect={aspect} />
                </div>
              )
            })}

            {hasMore && (
              <div className="col-span-5 flex justify-center md:col-span-12">
                <LoadMoreButton onClick={() => setVisibleCount((v) => v + 8)} />
              </div>
            )}
          </>
        )}
      </GridSection>
    </main>
  )
}
