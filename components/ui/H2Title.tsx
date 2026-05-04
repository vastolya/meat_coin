'use client'

import { motion } from 'framer-motion'

type H1TitleProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

const H1Title = ({ children, className = '', delay = 0 }: H1TitleProps) => {
  return (
    <motion.h2
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className={` ${className} font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase`}
    >
      {children}
    </motion.h2>
  )
}

export default H1Title
