'use client'

import { motion } from 'motion/react'
import { AnimationDelay, useResolvedDelay } from '../hooks/useResolvedDelay'

type Props = {
  className?: string
  delay?: AnimationDelay
  disableAnimation?: boolean
  animation?: 'slide' | 'fade'
  children?: React.ReactNode
}

const AnimatedDiv = ({
  className = '',
  delay = 0,
  disableAnimation = false,
  animation = 'slide',
  children,
}: Props) => {
  const resolvedDelay = useResolvedDelay(delay)
  const initial = animation === 'fade' ? { opacity: 0 } : { x: 40, opacity: 0 }
  const whileInView = animation === 'fade' ? { opacity: 1 } : { x: 0, opacity: 1 }

  if (disableAnimation) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: resolvedDelay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
