'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'

const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getMondayOffset(year: number, month: number) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

function Chevron({
  dir = 'down',
  className = 'h-4 w-4',
}: {
  dir?: 'up' | 'down' | 'left' | 'right'
  className?: string
}) {
  const rotate = { up: 'rotate-180', down: '', left: 'rotate-90', right: '-rotate-90' }[dir]
  return (
    <span
      className={`block ${rotate} ${className}`}
      style={{
        backgroundColor: 'currentColor',
        mask: "url('/dropdown.svg') center / contain no-repeat",
        WebkitMask: "url('/dropdown.svg') center / contain no-repeat",
      }}
    />
  )
}

interface DateTimePickerProps {
  onConfirm: (date: Date) => void
}

export default function DateTimePicker({ onConfirm }: DateTimePickerProps) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [hours, setHours] = useState(12)
  const [minutes, setMinutes] = useState(0)

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const offset = getMondayOffset(viewYear, viewMonth)
  const cells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1)
      setViewMonth(11)
    } else setViewMonth((m) => m - 1)
    setSelectedDay(null)
  }
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1)
      setViewMonth(0)
    } else setViewMonth((m) => m + 1)
    setSelectedDay(null)
  }

  const isPast = (day: number) => {
    return (
      new Date(viewYear, viewMonth, day) <
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    )
  }

  const isToday = (day: number) =>
    day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear()

  return (
    <div className="text-dark flex flex-col gap-2 rounded-lg bg-white p-4">
      <div className="flex items-center justify-between">
        <button onClick={prevMonth} className="hover:text-accent cursor-pointer transition-colors">
          <Chevron dir="left" className="text-gray h-5 w-5" />
        </button>
        <div className="flex items-end gap-2">
          <H3Title>{MONTHS[viewMonth]}</H3Title>
          <Paragraph className="text-gray">{viewYear}</Paragraph>
        </div>
        <button onClick={nextMonth} className="hover:text-accent cursor-pointer transition-colors">
          <Chevron dir="right" className="text-gray h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-gray border-border border-b pb-2 text-center text-xs">
            {d}
          </span>
        ))}
        {cells.map((day, i) => (
          <button
            key={i}
            disabled={!day || isPast(day)}
            onClick={() => day && setSelectedDay(day)}
            className={[
              'h-9 w-9 mx-auto rounded-full font-medium flex items-center justify-center text-sm transition-colors',
              !day ? 'invisible' : '',
              day && isPast(day) ? 'text-gray cursor-not-allowed' : 'cursor-pointer',
              day && !isPast(day) && day !== selectedDay ? 'hover:bg-(--color-beige)' : '',
              day === selectedDay ? 'bg-(--color-accent) text-white' : '',
              isToday(day!) && day !== selectedDay ? 'font-extrabold' : '',
            ].join(' ')}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <H3Title>Время</H3Title>
          <H3Title>
            {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}
          </H3Title>
        </div>

        <div className="flex items-center gap-1.5 font-extrabold">
          <div className="flex flex-col items-center p-3">
            <button
              onClick={() => setHours((h) => (h + 1) % 24)}
              className="hover:text-accent cursor-pointer transition-colors"
            >
              <Chevron dir="up" className="text-gray h-5 w-5" />
            </button>
            <Paragraph className="w-6 text-center">{String(hours).padStart(2, '0')}</Paragraph>
            <button
              onClick={() => setHours((h) => (h - 1 + 24) % 24)}
              className="hover:text-accent cursor-pointer transition-colors"
            >
              <Chevron dir="down" className="text-gray h-5 w-5" />
            </button>
          </div>
          <Paragraph className="w-6 text-center">:</Paragraph>
          <div className="flex flex-col items-center p-3">
            <button
              onClick={() => setMinutes((m) => (m + 5) % 60)}
              className="hover:text-accent cursor-pointer transition-colors"
            >
              <Chevron dir="up" className="text-gray h-5 w-5" />
            </button>
            <Paragraph className="w-6 text-center">{String(minutes).padStart(2, '0')}</Paragraph>

            <button
              onClick={() => setMinutes((m) => (m - 5 + 60) % 60)}
              className="hover:text-accent cursor-pointer transition-colors"
            >
              <Chevron dir="down" className="text-gray h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <Button
        text="Подтвердить"
        className="w-full"
        onClick={() => {
          if (!selectedDay) return
          onConfirm(new Date(viewYear, viewMonth, selectedDay, hours, minutes))
        }}
      />
    </div>
  )
}
