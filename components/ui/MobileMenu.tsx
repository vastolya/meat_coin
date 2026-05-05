'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

interface NavItem {
  title: string
  link: string
}

interface MobileMenuProps {
  isOpen: boolean
  navItems: NavItem[]
  onClose: () => void
}

const MobileMenu = ({ isOpen, navItems, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-[1100] bg-black/28 backdrop-blur-md transition-opacity duration-500 md:hidden ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute top-19.5 right-0 left-0 origin-top overflow-hidden bg-(--color-beige) transition-[opacity,clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'opacity-100 [clip-path:inset(0_0_0_0)]' : 'opacity-0 [clip-path:inset(0_0_100%_0)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[678px] max-h-[calc(100dvh-140px)] flex-col px-5 pt-16 pb-8 text-(--color-dark)">
          <div className="flex-1 overflow-y-auto">
            <button
              type="button"
              className="flex w-full items-center justify-between pb-10 text-left text-[2rem] leading-[104%] font-medium"
            >
              <span>Рестораны</span>
              <span className="text-base">▾</span>
            </button>

            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="py-8 text-[2rem] leading-[104%] font-medium"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-10">
            <div className="pb-10 text-[2rem] leading-[104%] font-medium text-(--color-accent)">
              RU
            </div>
            <div className="flex items-center gap-6">
              <Image src="/yandex_mesto.svg" alt="" width={95} height={54} />
              <Button
                text="Оставить отзыв"
                variant="secondary"
                className="flex w-full justify-center border-(--color-accent)! text-(--color-accent)!"
              />
            </div>
            <p className="pt-6 text-sm leading-[148%] text-(--color-gray)">
              © Meat_Coin, 2026 . Все права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
