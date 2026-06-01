'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PlusIcon from '../icons/PlusIcon'

interface SlideModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function SlideModal({ isOpen, onClose, children }: SlideModalProps) {
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
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={onClose}
          />

          <motion.div
            className="text-dark relative z-10 h-full w-238 overflow-y-auto bg-white pt-10 pr-20 pb-18 pl-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
          >
            <button
              onClick={onClose}
              className="text-dark hover:text-accent flex w-full cursor-pointer justify-end transition-colors duration-300"
            >
              <div className="rotate-45">
                <PlusIcon />
              </div>
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
