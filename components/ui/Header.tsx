'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from './Button'
import MobileMenu from './MobileMenu'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : ''
    document.body.style.touchAction = isMenuOpen ? 'none' : ''
    document.documentElement.style.touchAction = isMenuOpen ? 'none' : ''

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.touchAction = ''
      document.documentElement.style.touchAction = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="relative z-[1101] mx-auto flex items-center justify-between px-5 py-2 md:max-w-360 md:px-20 md:py-4">
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

        <motion.button
          {...slideIn(0)}
          type="button"
          className={`burger-menu inline-flex md:hidden ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
        >
          <span />
        </motion.button>

        <div className="hidden items-center gap-7 md:flex">
          <motion.div {...slideIn(0.8)}>
            <div className="text-(--color-accent)">RU</div>
          </motion.div>

          <motion.div {...slideIn(0.92)}>
            <Button text="Забронировать" />
          </motion.div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} navItems={nav_menu} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
