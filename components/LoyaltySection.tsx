'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Button from '@/components/ui/Button'

const BENEFITS = [
  'Приоритетное бронирование столов',
  'Доступ к предпродаже на специальные мероприятия',
  'Персональные предложения и накопление баллов (meat_coins)',
  'Подарочный сертификат на сумму номинала — универсальный статусный подарок',
]

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const, delay },
})

export default function LoyaltySection() {
  return (
    <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-30">
      <motion.p
        {...fadeUp(0)}
        className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]"
      >
        Станьте частью закрытого круга
      </motion.p>

      <motion.h2
        {...fadeUp(0.1)}
        className="font-albertus col-span-8 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase"
      >
        Программа лояльности
      </motion.h2>

      <motion.div {...fadeUp(0.2)} className="col-span-4 flex flex-col justify-end py-18">
        <Image src="/loyalty.svg" alt="loyalty" width={299} height={236} />
      </motion.div>

      <div className="col-span-8 py-18">
        <motion.p
          {...fadeUp(0.25)}
          className="text-accent text-base leading-[148%] font-medium tracking-[1%]"
        >
          Участники программы получают
        </motion.p>

        {BENEFITS.map((item, idx) => (
          <motion.h3
            key={item}
            {...fadeUp(0.3 + idx * 0.1)}
            className="border-devider border-b-[1.5px] py-11 text-2xl leading-[116%] font-extrabold tracking-normal"
          >
            {item}
          </motion.h3>
        ))}
      </div>

      <motion.div
        {...fadeUp(0.3 + BENEFITS.length * 0.1)}
        className="col-span-8 col-start-5 flex items-center gap-7"
      >
        <Button text="оформить подарочный сертификат" variant="secondary" />
        <div className="flex cursor-pointer gap-2">
          <p className="text-accent col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
            О программе лояльности
          </p>
          <ArrowIcon color="var(--color-accent)" height={24} width={24} />
        </div>
      </motion.div>
    </section>
  )
}
