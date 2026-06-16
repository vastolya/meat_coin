'use client'

import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import Image from 'next/image'
import type { PastPhoto } from '@/consts/events'

type MarqueeRowProps = {
  photos: PastPhoto[]
  reverse?: boolean
  /** скорость автопрокрутки, px/ms */
  speed?: number
}

export default function MarqueeRow({ photos, reverse = false, speed = 0.035 }: MarqueeRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  // позицию держим во float и только пишем в scrollLeft — getter округляет до целого
  const pos = useRef(0)
  const drag = useRef({
    down: false,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
    seg: 0,
  })
  const dir = reverse ? -1 : 1

  // три копии — чтобы при оборачивании по сегменту петля была бесшовной
  const loop = [...photos, ...photos, ...photos]

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const measure = () => {
      drag.current.seg = el.scrollWidth / 3
    }
    measure()
    pos.current = drag.current.seg
    el.scrollLeft = pos.current

    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = now - last
      last = now
      const s = drag.current

      if (!s.down) {
        if (Math.abs(s.velocity) > 0.015) {
          pos.current += s.velocity * dt
          s.velocity *= 0.94 // затухание инерции
        } else {
          pos.current += dir * speed * dt // медленная автопрокрутка
        }
      }

      // бесшовное оборачивание
      const seg = s.seg
      if (seg > 0) {
        if (pos.current < seg * 0.5) pos.current += seg
        else if (pos.current > seg * 1.5) pos.current -= seg
      }

      el.scrollLeft = pos.current
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [dir, speed])

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const s = drag.current
    s.down = true
    s.startX = e.clientX
    s.startScroll = pos.current
    s.lastX = e.clientX
    s.lastT = performance.now()
    s.velocity = 0
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = drag.current
    if (!s.down) return
    pos.current = s.startScroll - (e.clientX - s.startX)

    const now = performance.now()
    const dt = now - s.lastT
    if (dt > 0) s.velocity = -(e.clientX - s.lastX) / dt
    s.lastX = e.clientX
    s.lastT = now
  }

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = drag.current
    if (!s.down) return
    s.down = false
    ref.current?.releasePointerCapture(e.pointerId)
  }

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="flex w-full cursor-grab touch-pan-y overflow-x-hidden select-none active:cursor-grabbing"
    >
      {loop.map((photo, i) => (
        <div
          key={i}
          className={`group relative mr-7 h-50 shrink-0 overflow-hidden rounded-lg bg-(--color-devider) md:h-75 ${
            photo.variant === 'wide' ? 'w-[280px] md:w-[390px]' : 'w-[180px] md:w-[236px]'
          }`}
        >
          <Image
            fill
            draggable={false}
            src={photo.src}
            alt="Фото с прошлого события"
            sizes="390px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
