'use client'

import ArrowTextLink from '@/components/ui/ArrowTextLink'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import type { Dish } from '@/consts/menu'
import DishCard from './DishCard'
import { getCardLayout } from './dishLayout'

interface BarMenuContentProps {
  visible: Dish[]
  hasMore: boolean
  onLoadMore: () => void
}

export default function BarMenuContent({ visible, hasMore, onLoadMore }: BarMenuContentProps) {
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
          <ArrowTextLink onClick={onLoadMore}>Загрузить ещё</ArrowTextLink>
        </div>
      )}
    </>
  )
}
