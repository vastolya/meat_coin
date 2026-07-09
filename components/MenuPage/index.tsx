'use client'

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import { DISHES, MENU_CATEGORIES, type Dish } from '@/consts/menu'
import CategorySection from './CategorySection'
import MenuTabs from './MenuTabs'

const initialVisibleCount = (id: string) => (id === 'bar' ? 12 : 8)

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id)
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(MENU_CATEGORIES.map((c) => [c.id, initialVisibleCount(c.id)]))
  )

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabsBarRef = useRef<HTMLDivElement>(null)

  const dishesByCategory = useMemo(() => {
    const map: Record<string, Dish[]> = {}
    for (const cat of MENU_CATEGORIES) map[cat.id] = DISHES.filter((d) => d.category === cat.id)
    return map
  }, [])

  const loadMore = useCallback((id: string) => {
    setVisibleCounts((prev) => ({ ...prev, [id]: prev[id] + 8 }))
  }, [])

  // Реальный отступ под хедером + баром табов (px) — CSS-переменная --menu-scroll-offset:
  // 1) scroll-margin-top у секций, чтобы scrollIntoView сам считал нужную позицию;
  // 2) min-height у последней секции, чтобы её было куда докрутить (иначе scrollIntoView
  //    упирается в конец документа и секция замирает под баром, не доехав).
  // "top" бара читаем из его же вычисленных стилей — то же значение, что в className
  // MenuTabs (top-[60px] md:top-[90px]), без дублирования брейкпоинтов в JS.
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const bar = tabsBarRef.current
    if (!bar) return
    const update = () => {
      const stickyTop = parseFloat(getComputedStyle(bar).top) || 0
      setScrollOffset(stickyTop + bar.offsetHeight + 16)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(bar)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  // Пока идёт программный скролл к разделу, скроллспай временно молчит — иначе он
  // на промежуточных позициях мельком подсвечивает другие табы и подсветка дёргается.
  const suppressSpyRef = useRef(false)
  const suppressFallbackRef = useRef<number | undefined>(undefined)

  const scrollToCategory = useCallback((id: string) => {
    const target = sectionRefs.current[id]
    if (!target) return
    suppressSpyRef.current = true
    window.clearTimeout(suppressFallbackRef.current)
    suppressFallbackRef.current = window.setTimeout(() => {
      suppressSpyRef.current = false
    }, 1000)
    setActiveCategory(id)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  useEffect(() => {
    const resumeSpy = () => {
      suppressSpyRef.current = false
      window.clearTimeout(suppressFallbackRef.current)
    }

    let raf = 0
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (suppressSpyRef.current) return
        const barBottom = tabsBarRef.current?.getBoundingClientRect().bottom ?? 0
        let current = MENU_CATEGORIES[0].id
        for (const cat of MENU_CATEGORIES) {
          const el = sectionRefs.current[cat.id]
          if (el && el.getBoundingClientRect().top - barBottom <= 1) current = cat.id
        }
        setActiveCategory(current)
      })
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scrollend', resumeSpy)
    window.addEventListener('wheel', resumeSpy, { passive: true })
    window.addEventListener('touchstart', resumeSpy, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scrollend', resumeSpy)
      window.removeEventListener('wheel', resumeSpy)
      window.removeEventListener('touchstart', resumeSpy)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className="bg-(--color-beige) text-(--color-dark)">
      <GridSection className="pt-18 pb-6">
        <H1Title className="col-span-5 md:col-span-8">Меню</H1Title>
      </GridSection>

      <div
        className="relative"
        style={{ '--menu-scroll-offset': `${scrollOffset}px` } as CSSProperties}
      >
        <MenuTabs
          tabs={MENU_CATEGORIES}
          activeId={activeCategory}
          onChange={scrollToCategory}
          barRef={tabsBarRef}
        />

        <div className="flex flex-col gap-14 pt-6 pb-20 md:gap-24">
          {MENU_CATEGORIES.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              dishes={dishesByCategory[cat.id]}
              visibleCount={visibleCounts[cat.id]}
              onLoadMore={() => loadMore(cat.id)}
              sectionRef={(el) => {
                sectionRefs.current[cat.id] = el
              }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
