'use client'

import { motion } from 'framer-motion'
import { AnimationDelay, useResolvedDelay } from '../hooks/useResolvedDelay'

interface ParagraphProps {
  children: React.ReactNode
  className?: string
  delay?: AnimationDelay
  animate?: import('framer-motion').TargetAndTransition
  disableAnimation?: boolean
}

const Paragraph = ({
  children,
  className = '',
  delay = 0,
  animate: animateProp,
  disableAnimation = false,
}: ParagraphProps) => {
  const resolvedDelay = useResolvedDelay(delay)

  return (
    <motion.p
      initial={disableAnimation ? false : { x: 40, opacity: 0 }}
      {...(disableAnimation
        ? { animate: { x: 0, opacity: 1 } }
        : animateProp
        ? { animate: animateProp }
        : { whileInView: { x: 0, opacity: 1 }, viewport: { once: true } })}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: resolvedDelay,
      }}
      className={`text-base leading-[148%] font-medium tracking-[0%] md:tracking-[1%] ${className}`}
    >
      {children}
    </motion.p>
  )
}

export default Paragraph
