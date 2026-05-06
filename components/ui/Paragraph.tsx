'use client'

import { motion } from 'framer-motion'

interface ParagraphProps {
  children: React.ReactNode
  className?: string
  delay?: number
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
        delay,
      }}
      className={`text-base leading-[148%] font-medium tracking-[1%] ${className}`}
    >
      {children}
    </motion.p>
  )
}

export default Paragraph
