'use client'

import { useState } from 'react'
import SlideModal from '@/components/ui/SlideModal'
import ArrowIcon from '@/components/icons/ArrowIcon'
import FireIcon from '@/components/ui/FireIcon'
import Paragraph from '@/components/ui/Paragraph'
import H2Title from '@/components/ui/H2Title'

const rows = [
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
  {
    date: '22 мая 2025',
    period: 'II квартал 2025',
    amount: '> 4,0',
    note: 'Промежуточные дивиденды',
  },
]

export default function DividendsHistoryButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="group mt-7 flex cursor-pointer items-center gap-2"
        onClick={() => setOpen(true)}
      >
        <Paragraph className="group-hover:text-accent transition-colors duration-400 ease-in-out">
          Раскрыть всю историю
        </Paragraph>
        <span className="group-hover:text-accent inline-flex transition-[translate,color] duration-400 ease-in-out group-hover:translate-x-4">
          <ArrowIcon />
        </span>
      </button>

      <SlideModal isOpen={open} onClose={() => setOpen(false)}>
        <H2Title className="pb-18">История выплат новым акционерам</H2Title>

        <div className="overflow-hidden rounded-sm border border-[#F6F5F7]">
          <div className="text-border grid grid-cols-[44px_160px_160px_160px_280px] items-center bg-[#F6F5F7] py-4">
            <div />
            <Paragraph className="px-2.5">Дата</Paragraph>
            <Paragraph className="flex items-center gap-1.5 px-2.5">Период</Paragraph>
            <Paragraph className="px-2.5">Сумма (млн ₽)</Paragraph>
            <Paragraph className="px-2.5">Примечание</Paragraph>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[44px_160px_160px_160px_280px] items-center border-t border-[#F6F5F7] py-3.5 ${i % 2 === 1 ? 'bg-[#F6F5F7]' : 'bg-white'}`}
            >
              <div className="px-2.5">
                <FireIcon color={i % 2 === 1 ? 'white' : '#F6F5F7'} />
              </div>
              <Paragraph className="px-2.5">{row.date}</Paragraph>
              <Paragraph className="px-2.5">{row.period}</Paragraph>
              <Paragraph className="px-2.5">{row.amount}</Paragraph>
              <Paragraph className="px-2.5">{row.note}</Paragraph>
            </div>
          ))}
        </div>
      </SlideModal>
    </>
  )
}
