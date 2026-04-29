'use client'

import { motion } from 'motion/react'
import Tag from '@/components/ui/Tag'

const TEXT = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

const CARD = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

const TEXT_STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const CARDS_STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
}

const chefs = [
  {
    name: 'Ариф Найджи',
    restaurant: 'Country Club',
    role: 'Бренд-шеф Meat_Coin',
    city: 'Комарово',
    bgClass: "bg-[url('/arif.webp')]",
  },
  {
    name: 'Мехмет Найджи',
    restaurant: 'Steak & Terrace',
    role: 'Авторский подход и баланс вкуса в столичном формате',
    city: 'Москва',
    bgClass: "bg-[url('/mahmet.webp')]",
  },
  {
    name: 'Толга Мюрекепчи',
    restaurant: 'Butcher & Grill',
    role: 'Точность работы с мясом и энергия открытой кухни',
    city: 'Санкт-Петербург',
    bgClass: "bg-[url('/tolga.webp')]",
  },
]

export default function ChefsSection() {
  return (
    <motion.section
      className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30 pb-35"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="col-span-12 grid grid-cols-12 gap-7" variants={TEXT_STAGGER}>
        <motion.p
          className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]"
          variants={TEXT}
        >
          Хранители традиций
        </motion.p>
        <motion.div className="col-span-8 flex flex-col gap-2" variants={TEXT}>
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            Шеф-повара Meat_Coin
          </h2>
          <p className="text-base leading-[148%] font-medium tracking-[1%]">
            <span className="text-(--color-accent)">Команду Meat_Coin возглавляют шефы</span> с
            турецкой школой <br /> и глубоким пониманием ремесла
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="col-span-12 mt-18 grid grid-cols-3 gap-7" variants={CARDS_STAGGER}>
        {chefs.map((chef) => (
          <motion.div key={chef.name} className="flex flex-col gap-4" variants={CARD}>
            <div
              className={`relative h-191 w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-cover ${chef.bgClass}`}
            >
              <div className="absolute bottom-2 left-2">
                <Tag text={chef.city} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">{chef.name}</h3>
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)">
                {chef.restaurant}
              </h3>
              <p className="text-gray text-base leading-[148%] font-medium tracking-[1%]">
                {chef.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
