'use client'

import { motion } from 'framer-motion'

type H2TitleProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

const H2Title = ({ children, className = '', delay = 0 }: H2TitleProps) => {
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
      className={`${className} font-albertus text-[1.75rem] leading-[120%] font-normal tracking-[-1%] uppercase md:text-[2.5rem]`}
    >
      {children}
    </motion.h2>
  )
}

export default H2Title
