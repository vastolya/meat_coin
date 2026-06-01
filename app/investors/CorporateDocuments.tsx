'use client'

import { useState } from 'react'
import DownloadIcon from '@/components/ui/DownloadIcon'
import Paragraph from '@/components/ui/Paragraph'

export default function CorporateDocuments() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const itemClass = (id: number, extra?: string) => {
    const isHovered = hoveredId === id
    const anyHovered = hoveredId !== null
    return [
      'flex cursor-pointer gap-2 rounded-sm border p-4 transition-[border-color,opacity] duration-200',
      isHovered ? 'border-transparent' : 'border-devider',
      anyHovered && !isHovered ? 'opacity-40' : 'opacity-100',
      extra,
    ]
      .filter(Boolean)
      .join(' ')
  }

  const bind = (id: number) => ({
    onMouseEnter: () => setHoveredId(id),
    onMouseLeave: () => setHoveredId(null),
  })

  return (
    <>
      <Paragraph className="text-gray pb-4">Общие документы</Paragraph>

      <div className={itemClass(0, 'mb-2')} {...bind(0)}>
        <DownloadIcon height={24} width={24} />
        <div className="flex w-full justify-between">
          <Paragraph className="leading-[150%]! font-black! uppercase">
            Устав АО «Гигарест»
          </Paragraph>
          <Paragraph className="text-gray">22.05.2025</Paragraph>
        </div>
      </div>

      <div className={itemClass(1, 'mb-8')} {...bind(1)}>
        <DownloadIcon height={24} width={24} />
        <div className="flex w-full justify-between">
          <Paragraph className="leading-[150%]! font-black! uppercase">
            Бухгалтерская отчётность (РСБУ)
          </Paragraph>
          <Paragraph className="text-gray">22.05.2026</Paragraph>
        </div>
      </div>

      <Paragraph className="text-gray pb-4">Документы по раунду инвестиций 2025 года</Paragraph>

      <div className={itemClass(2, 'mb-2')} {...bind(2)}>
        <DownloadIcon height={24} width={24} />
        <div className="flex w-full justify-between">
          <Paragraph className="leading-[150%]! font-black! uppercase">Пут-опцион от</Paragraph>
          <Paragraph className="text-gray">14.07.2025</Paragraph>
        </div>
      </div>

      <div className={itemClass(3, 'mb-2')} {...bind(3)}>
        <DownloadIcon height={24} width={24} />
        <div className="flex w-full justify-between">
          <Paragraph className="leading-[150%]! font-black! uppercase">
            ДСУР (документ, содержащий условия размещения)
          </Paragraph>
          <Paragraph className="text-gray">30.06.2025</Paragraph>
        </div>
      </div>

      <div className={itemClass(4)} {...bind(4)}>
        <DownloadIcon height={24} width={24} />
        <div className="flex w-full justify-between">
          <Paragraph className="leading-[150%]! font-black! uppercase">
            Дивидендная политика
          </Paragraph>
          <Paragraph className="text-gray">10.07.2025</Paragraph>
        </div>
      </div>
    </>
  )
}
