'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Button from '@/components/ui/Button'

const tabs = [
  { id: 'kitchen', label: 'Кухня' },
  { id: 'bar', label: 'Бар / Винная карта' },
] as const

type Tab = (typeof tabs)[number]['id']

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Tab>('kitchen')

  return (
    <section className="rounded-t-[7.5rem] bg-(--color-beige) text-(--color-dark)">
      <div className="relative mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30 pb-18">
        <div className="absolute top-72 left-20 flex bg-white p-1 text-base leading-[148%] font-medium tracking-[1%]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative rounded-sm px-6 py-2"
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-bg"
                  className="bg-accent absolute inset-0 rounded-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  activeTab === tab.id ? 'text-white' : 'text-accent'
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="col-span-4 flex gap-2">
          <Button text="Меню" variant="secondary" />
          <Button text="Винная карта" variant="secondary" />
        </div>
        <h2 className="font-albertus col-span-8 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
          Авторская кухня и турецкие традиции мясников
        </h2>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'kitchen' && (
          <motion.div
            key="kitchen"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mx-auto grid max-w-360 grid-cols-12 items-start gap-7 px-20 pb-30"
          >
            <>
              <div className="col-span-4 flex h-full flex-col justify-end">
                <p className="text-base leading-[148%] font-medium tracking-[1%]">
                  Авторская кухня Meat_Coin — симбиоз турецких традиций и современных трендов
                </p>
              </div>
              <div className="relative col-span-8 h-120 rounded-lg bg-[url('/menu_01.webp')] bg-cover">
                <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
                  Рибай
                </div>
              </div>
            </>

            <>
              <div className="col-span-4 flex h-full flex-col justify-end">
                <p className="text-base leading-[148%] font-medium tracking-[1%]">
                  Каждый стейк становится произведением искусства, а гриль-меню отражает философию
                  уважения к мясу
                </p>
              </div>
              <div className="relative col-span-8 h-120 rounded-lg bg-[url('/menu_02.webp')] bg-cover">
                <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
                  Вагю
                </div>
              </div>
            </>

            <>
              <div className="relative col-span-8 col-start-5 h-120 rounded-lg bg-[url('/menu_03.webp')] bg-cover">
                <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
                  Ти-бон
                </div>
              </div>
            </>

            <>
              <div className="relative col-span-8 col-start-5 h-120 rounded-lg bg-[url('/menu_04.webp')] bg-cover">
                <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
                  На открытом огне
                </div>
              </div>
            </>
          </motion.div>
        )}

        {activeTab === 'bar' && (
          <motion.div
            key="bar"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mx-auto grid max-w-360 grid-cols-12 items-start gap-7 px-20 pb-30"
          >
            <>
              <div className="relative col-span-8 col-start-5 h-120 rounded-lg bg-[url('/bar_01.webp')] bg-cover">
                <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
                  Коллекция вин
                </div>
              </div>
            </>

            <>
              <div className="col-span-4 flex h-full flex-col justify-end">
                <p className="text-base leading-[148%] font-medium tracking-[1%]">
                  Винная карта и коктейли собраны так, чтобы поддерживать вкус мяса и не спорить
                  с ним
                </p>
              </div>
              <div className="relative col-span-8 h-120 rounded-lg bg-[url('/bar_02.webp')] bg-cover">
                <div className="absolute bottom-4 left-4 rounded-sm bg-white/10 p-4 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white backdrop-blur-sm">
                  Коктейльная карта
                </div>
              </div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
