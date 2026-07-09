'use client'

import type { Ref } from 'react'
import GridSection from '@/components/ui/GridSection'
import PillTabs from '@/components/ui/PillTabs'
import type { MenuCategory } from '@/consts/menu'

interface MenuTabsProps {
  tabs: MenuCategory[]
  activeId: string
  onChange: (id: string) => void
  barRef: Ref<HTMLDivElement>
}

export default function MenuTabs({ tabs, activeId, onChange, barRef }: MenuTabsProps) {
  return (
    <div ref={barRef} className="sticky top-[60px] z-30 bg-none py-4 md:top-[90px]">
      <GridSection>
        <div className="col-span-12 mx-auto">
          <PillTabs tabs={tabs} activeId={activeId} onChange={onChange} className="w-fit" />
        </div>
      </GridSection>
    </div>
  )
}
