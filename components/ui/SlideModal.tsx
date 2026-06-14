'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PlusIcon from '../icons/PlusIcon'

interface SlideModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  headerLeft?: React.ReactNode
  className?: string
}

export default function SlideModal({ isOpen, onClose, children, headerLeft, className = '' }: SlideModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-2202 flex justify-end">
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={onClose}
          />

          <motion.div
            className={`text-dark bg-beige relative z-10 h-full w-238 overflow-y-auto pt-10 pr-20 pb-18 pl-10 ${className}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
          >
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

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
