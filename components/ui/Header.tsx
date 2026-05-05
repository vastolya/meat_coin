'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const nav_menu = [
  { title: 'Меню', link: '/menu' },
  { title: 'Шефы', link: '/shefs' },
  { title: 'Программа лояльности', link: '/loyalty' },
  { title: 'События', link: '/event' },
  { title: 'Медиа', link: '/media' },
  { title: 'Контакты', link: '/contacts' },
]

const slideIn = (delay: number) => ({
  initial: { x: 16, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' as const, delay },
})

// logo: 0s  nav: 0.25s + idx*0.07s  language: 0.80s  button: 0.92s

const Header = () => {
  return (
    <header className="mx-auto flex justify-between px-4 py-2 md:max-w-360 md:px-20 md:py-4">
      <div className="flex items-center gap-7">
        <motion.div {...slideIn(0)} className="relative h-11 w-39.5">
          <Link href="/">
            <Image src="/logo.svg" alt="" fill sizes="auto" />
          </Link>
        </motion.div>

        <div className="hidden md:flex">
          {nav_menu.map((i, idx) => (
            <motion.div key={i.title} {...slideIn(0.25 + idx * 0.07)}>
              <Link href={i.link} className="px-4">
                {i.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 md:hidden">
        <div className="h-0.5 w-4.5 bg-white" />
        <div className="h-0.5 w-4.5 bg-white" />
        <div className="h-0.5 w-4.5 bg-white" />
      </div>

      <div className="hidden items-center gap-7 md:flex">
        <motion.div {...slideIn(0.8)}>
          <div className="text-(--color-accent)">RU</div>
        </motion.div>

        <motion.div {...slideIn(0.92)}>
          <Button text="Забронировать" />
        </motion.div>
      </div>
    </header>
  )
}

export default Header
