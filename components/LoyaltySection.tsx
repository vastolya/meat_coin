'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Button from '@/components/ui/Button'
import GridSection from '@/components/ui/GridSection'
import Paragraph from './ui/Paragraph'
import H2Title from './ui/H2Title'
import H3Title from './ui/H3Title'

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
    <GridSection className="py-12 md:py-30">
      <Paragraph className="text-gray col-span-5 md:col-span-4">
        Станьте частью закрытого круга
      </Paragraph>

      <H2Title className="col-span-5 md:col-span-8">Программа лояльности</H2Title>

      <motion.div
        {...fadeUp(0.2)}
        className="hidden flex-col justify-end py-18 md:col-span-4 md:flex"
      >
        <Image src="/loyalty.svg" alt="loyalty" width={299} height={236} />
      </motion.div>

      <div className="col-span-5 py-7 md:col-span-8 md:py-18">
        <Paragraph className="text-accent">Участники программы получают</Paragraph>

        {BENEFITS.map((item, idx) => (
          <div key={item}>
            <H3Title
              delay={idx * 0.2}
              className="md:border-devider py-7 md:border-b-[1.5px] md:py-11"
            >
              {item}
            </H3Title>
            <div className="border-devider -mx-4 border-b-[1.5px]" />
          </div>
        ))}
      </div>

      <motion.div
        {...fadeUp(0.3 + BENEFITS.length * 0.1)}
        className="col-span-5 flex flex-col items-center gap-7 md:col-span-8 md:col-start-5 md:flex-row"
      >
        <Button text="оформить подарочный сертификат" variant="secondary" className="text-white" />
        <div className="text-accent flex cursor-pointer gap-2">
          <Paragraph className="col-span-5 md:col-span-4">О программе лояльности</Paragraph>

          <ArrowIcon height={24} width={24} />
        </div>
      </motion.div>
    </GridSection>
  )
}
