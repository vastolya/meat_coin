'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { RESTAURANTS } from '../../consts/restaurants'
import Button from './Button'
import { useBooking } from '@/contexts/BookingContext'
import H3Title from './H3Title'
import MobileMenu from './MobileMenu'
import Paragraph from './Paragraph'

const navMenu = [
  { title: 'Рестораны', dropdown: true },
  { title: 'Меню', link: '/menu' },
  { title: 'Шефы', link: '/chefs' },
  { title: 'Программа лояльности', link: '/loyalty' },
  { title: 'Event', link: '/event' },
  { title: 'О нас', link: '/about' },
  { title: 'Медиа', link: '/blog' },
  { title: 'Контакты', link: '/contacts' },
]

const slideIn = (delay: number) => ({
  initial: { x: 16, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' as const, delay },
})

const dropdownIconStyle = {
  backgroundColor: 'currentColor',
  mask: "url('/dropdown.svg') center / contain no-repeat",
  WebkitMask: "url('/dropdown.svg') center / contain no-repeat",
} as const

const Header = () => {
  const { openBooking } = useBooking()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const prevPathname = useRef<string | null>(null)
  const prevHadUnderline = navMenu.some((i) => !i.dropdown && i.link === prevPathname.current)

  useEffect(() => {
    prevPathname.current = pathname
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 10 || currentY < lastScrollY.current) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsDropdownOpen(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isDropdownOpen) return
    const close = () => setIsDropdownOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [isDropdownOpen])

  useEffect(() => {
    const els = [document.body, document.documentElement]
    els.forEach((el) => {
      el.style.overflow = isMenuOpen ? 'hidden' : ''
      el.style.touchAction = isMenuOpen ? 'none' : ''
    })
    return () =>
      els.forEach((el) => {
        el.style.overflow = ''
        el.style.touchAction = ''
      })
  }, [isMenuOpen])

  return (
    <>
      <motion.div
        className="bg-dark fixed top-0 right-0 left-0 z-1101"
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <header className="relative mx-auto flex items-center justify-between px-5 py-2 md:max-w-360 md:px-20 md:py-4">
          {/* covers dropdown while it animates behind the header */}
          <div className="bg-dark pointer-events-none absolute inset-0 z-1" />

          <div className="relative z-2 flex w-full items-center justify-between">
            <div className="flex items-center gap-7">
              <motion.div {...slideIn(0)} className="relative h-11 w-39.5">
                <Link href="/">
                  <Image src="/logo.svg" alt="" fill sizes="auto" />
                </Link>
              </motion.div>

              <nav className="hidden md:flex">
                {navMenu.map((item, idx) =>
                  item.dropdown ? (
                    <motion.div key={item.title} {...slideIn(0.25 + idx * 0.07)}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsDropdownOpen((prev) => !prev)
                        }}
                        className="hover:text-accent flex cursor-pointer items-center gap-1 px-4 text-sm leading-[146%] tracking-normal whitespace-nowrap transition-all duration-300"
                      >
                        {item.title}
                        <span
                          className={`inline-flex h-6 w-6 origin-center items-center justify-center transition-transform duration-300 ease-out ${isDropdownOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          <span className="block h-6 w-6" style={dropdownIconStyle} />
                        </span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key={item.title} {...slideIn(0.25 + idx * 0.07)}>
                      <Link
                        href={item.link!}
                        className={`relative px-4 text-sm leading-[146%] tracking-normal whitespace-nowrap transition-colors duration-300 ${
                          pathname === item.link ? 'text-accent' : 'hover:text-accent'
                        }`}
                      >
                        {item.title}
                        {pathname === item.link && (
                          <motion.span
                            layoutId="nav-underline"
                            className="bg-accent absolute top-[calc(100%+16px)] right-0 left-0 h-1"
                            initial={prevHadUnderline ? false : { clipPath: 'inset(0 100% 0 0)' }}
                            animate={{ clipPath: 'inset(0 0% 0 0)' }}
                            transition={{
                              layout: { type: 'spring', stiffness: 400, damping: 35 },
                              clipPath: { duration: 0.4, ease: 'easeOut' },
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>
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
                <span className="text-(--color-accent)">RU</span>
              </motion.div>
              <motion.div {...slideIn(0.92)}>
                <Button text="Забронировать" onClick={() => openBooking()} />
              </motion.div>
            </div>
          </div>

          <div className="absolute top-full right-0 left-0 z-0 hidden overflow-hidden px-20 md:block">
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-2"
                >
                  <div
                    className="bg-dark/50 flex rounded-lg px-20 py-6"
                    style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
                  >
                    {RESTAURANTS.map((r, index) => (
                      <Link
                        key={r.city}
                        href="/"
                        className="hover:text-accent flex flex-1 flex-col transition-all duration-300"
                      >
                        <H3Title delay={index * 0.2}>{r.city}</H3Title>
                        <Paragraph className="text-border" delay={index * 0.3}>
                          {r.restaurant}
                        </Paragraph>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>
      </motion.div>

      <MobileMenu isOpen={isMenuOpen} navItems={navMenu} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
