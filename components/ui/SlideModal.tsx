'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PlusIcon from '../icons/PlusIcon'

interface SlideModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  headerLeft?: React.ReactNode
  className?: string
}

export default function SlideModal({
  isOpen,
  onClose,
  children,
  headerLeft,
  className = '',
}: SlideModalProps) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  )
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const closeWithAnimation = useCallback(() => {
    const panel = panelRef.current
    if (!panel || !isMobile) {
      onClose()
      return
    }
    panel.style.transition = 'transform 0.35s cubic-bezier(0.25, 0, 0, 1)'
    panel.style.transform = 'translateY(100%)'
    setTimeout(onClose, 340)
  }, [isMobile, onClose])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWithAnimation()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, closeWithAnimation])

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  // Swipe-down-to-close: only activates when content is scrolled to top
  useEffect(() => {
    if (!isMobile || !isOpen) return
    const panel = panelRef.current
    if (!panel) return

    let startY = 0
    let startScrollTop = 0
    let dragging = false
    let lastY = 0
    let lastTime = 0

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      lastY = startY
      lastTime = Date.now()
      startScrollTop = panel.scrollTop
      dragging = false
      panel.style.transition = 'none'
    }

    const onTouchMove = (e: TouchEvent) => {
      const delta = e.touches[0].clientY - startY
      if (startScrollTop === 0 && delta > 0) {
        dragging = true
        e.preventDefault()
        lastY = e.touches[0].clientY
        lastTime = Date.now()
        panel.style.transform = `translateY(${delta}px)`
      }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!dragging) return
      const delta = e.changedTouches[0].clientY - startY
      const velocity = (e.changedTouches[0].clientY - lastY) / Math.max(Date.now() - lastTime, 1)
      dragging = false
      if (delta > 60 || velocity > 0.4) {
        closeWithAnimation()
      } else {
        panel.style.transition = 'transform 0.35s cubic-bezier(0.25, 0, 0, 1)'
        panel.style.transform = 'translateY(0)'
      }
    }

    panel.addEventListener('touchstart', onTouchStart, { passive: true })
    panel.addEventListener('touchmove', onTouchMove, { passive: false })
    panel.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      panel.removeEventListener('touchstart', onTouchStart)
      panel.removeEventListener('touchmove', onTouchMove)
      panel.removeEventListener('touchend', onTouchEnd)
    }
  }, [isMobile, isOpen, closeWithAnimation])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-2202 flex ${isMobile ? 'items-end' : 'justify-end'}`}>
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={closeWithAnimation}
          />

          <motion.div
            ref={panelRef}
            className={
              isMobile
                ? 'text-dark bg-beige relative z-10 h-fit w-full overflow-y-auto rounded-t-3xl px-6 pb-8'
                : `text-dark bg-beige relative z-10 h-full w-238 overflow-y-auto pt-10 pr-20 pb-18 pl-10 ${className}`
            }
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? {} : { x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
          >
            {isMobile ? (
              <div className="mb-6 flex justify-center py-1">
                <div className="bg-gray/40 h-1 w-10 rounded-full" />
              </div>
            ) : (
              <div className="flex w-full items-center justify-between">
                <div>{headerLeft}</div>
                <button
                  onClick={onClose}
                  className="text-dark hover:text-accent cursor-pointer transition-colors duration-300"
                >
                  <div className="rotate-45">
                    <PlusIcon height={24} width={24} />
                  </div>
                </button>
              </div>
            )}

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
