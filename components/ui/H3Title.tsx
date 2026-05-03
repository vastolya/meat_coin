import { motion } from 'framer-motion'

type H1TitleProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

const H1Title = ({ children, delay = 0, className = '' }: H1TitleProps) => {
  return (
    <motion.h3
      initial={{ x: 40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className={` ${className} text-2xl leading-[116%] font-extrabold tracking-normal`}
    >
      {children}
    </motion.h3>
  )
}

export default H1Title
