'use client'

import { motion } from 'framer-motion'

type H3TitleProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  animate?: import('framer-motion').TargetAndTransition
}

const H3Title = ({ children, delay = 0, className = '', animate: animateProp }: H3TitleProps) => {
  return (
    <motion.h3
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
      className={`text-xl leading-[118%] font-bold tracking-normal md:text-2xl md:leading-[116%] md:font-extrabold md:tracking-normal ${className}`}
    >
      {children}
    </motion.h3>
  )
}

export default H3Title
