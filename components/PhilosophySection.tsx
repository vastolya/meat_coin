'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'

export default function PhilosophySection() {
  return (
    <section className="mx-auto grid max-w-360 grid-cols-12 items-center gap-7 px-20 py-45">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 15,
          delay: 0.1,
        }}
      >
        <Image src={'ornament.svg'} alt="ornament" width={260} height={66} />
      </motion.div>

      <div className="col-span-5 col-start-5 flex flex-col gap-30">
        <div className="flex flex-col gap-7">
          <H3Title className="text-accent" delay={0.2}>
            Познать совершенный вкус <br /> авторской кухни
          </H3Title>

          <div className="flex flex-col gap-2">
            <Paragraph delay={0.4}>
              Философия ресторанов Meat_Coin строится вокруг <br /> главной ценности — премиального
              мяса
            </Paragraph>

            <Paragraph delay={0.6}>
              Мы не просто готовим стейки, мы создаём культуру, <br /> где каждый ингредиент имеет
              значение. Наши рестораны — <br /> это пространство, где турецкие традиции обращения с
              мясом <br /> встречаются с современной гастрономической эстетикой
            </Paragraph>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <H3Title className="text-accent" delay={0.8}>
            Открытый огонь и бескомпромиссное качество
          </H3Title>
          <div className="flex flex-col gap-2">
            <Paragraph delay={1}>
              Мы используем только мраморную говядину высших категорий и камеры сухого вызревания,
              чтобы раскрыть глубину вкуса. Каждое блюдо отражает наше стремление к идеалу и дарит
              гостям подлинное гастрономическое путешествие
            </Paragraph>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 15,
          delay: 0.1,
        }}
        className="col-start-12"
      >
        <Image src={'ornament.svg'} alt="ornament" width={260} height={66} />
      </motion.div>
    </section>
  )
}
