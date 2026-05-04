'use client'

import { motion } from 'framer-motion'

interface ParagraphProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animate?: import('framer-motion').TargetAndTransition
}

const Paragraph = ({
  children,
  className = '',
  delay = 0,
  animate: animateProp,
}: ParagraphProps) => {
  return (
    <motion.p
      initial={{ x: 40, opacity: 0 }}
      {...(animateProp
        ? { animate: animateProp }
        : { whileInView: { x: 0, opacity: 1 }, viewport: { once: true } })}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className={`${className} text-base leading-[148%] font-medium tracking-[1%]`}
    >
      {children}
    </motion.p>
  )
}

export default Paragraph
