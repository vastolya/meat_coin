'use client'

import { motion } from 'framer-motion'

type H1TitleProps = {
  children: React.ReactNode
  delay?: number
}

const H1Title = ({ children, delay = 0 }: H1TitleProps) => {
  return (
    <motion.h1
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className="font-albertus text-4xl leading-[122%] font-[250] tracking-[-1%] uppercase md:text-6xl md:leading-[113%]"
    >
      {children}
    </motion.h1>
  )
}

export default H1Title
