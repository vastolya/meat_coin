'use client'

import type { Ref } from 'react'
import ArrowTextLink from '@/components/ui/ArrowTextLink'
import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import InfoIcon from '@/components/icons/InfoIcon'
import type { Dish, MenuCategory } from '@/consts/menu'
import BarMenuContent from './BarMenuContent'
import DishCard from './DishCard'
import { getCardLayout } from './dishLayout'

interface CategorySectionProps {
  category: MenuCategory
  dishes: Dish[]
  visibleCount: number
  onLoadMore: () => void
  sectionRef: Ref<HTMLElement>
}

export default function CategorySection({
  category,
  dishes,
  visibleCount,
  onLoadMore,
  sectionRef,
}: CategorySectionProps) {
  const visible = dishes.slice(0, visibleCount)
  const hasMore = visibleCount < dishes.length
  const isBar = category.id === 'bar'

  return (
    <GridSection
      ref={sectionRef}
      className="scroll-mt-[var(--menu-scroll-offset)] last:min-h-[calc(100dvh_-_var(--menu-scroll-offset))]"
    >
      <div className="col-span-12 flex justify-between">
        <H2Title>{category.label}</H2Title>
        <InfoIcon className="text-border h-5 w-5 md:h-6 md:w-6" />
      </div>

      {isBar ? (
        <BarMenuContent visible={visible} hasMore={hasMore} onLoadMore={onLoadMore} />
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
              <ArrowTextLink onClick={onLoadMore}>Загрузить ещё</ArrowTextLink>
            </div>
          )}
        </>
      )}
    </GridSection>
  )
}
