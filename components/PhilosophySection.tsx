'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const TEXT = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
}

const ORNAMENT = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const, delay: 0.8 },
  },
}

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function PhilosophySection() {
  return (
    <motion.section
      className="mx-auto grid max-w-360 grid-cols-12 items-center gap-7 px-20 py-45"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Левый орнамент — сверху вниз */}
      <motion.div variants={ORNAMENT}>
        <Image src={'ornament.svg'} alt="ornament" width={260} height={66} />
      </motion.div>

      {/* Текст — по очереди слева направо */}
      <motion.div className="col-span-5 col-start-5 flex flex-col gap-30" variants={STAGGER}>
        <div className="flex flex-col gap-7">
          <motion.h3
            className="text-accent text-2xl leading-[116%] font-extrabold tracking-normal"
            variants={TEXT}
          >
            Познать совершенный вкус <br /> авторской кухни
          </motion.h3>
          <div className="flex flex-col gap-2">
            <motion.p
              className="text-base leading-[148%] font-medium tracking-[1%]"
              variants={TEXT}
            >
              Философия ресторанов Meat_Coin строится вокруг <br /> главной ценности — премиального
              мяса
            </motion.p>
            <motion.p
              className="text-base leading-[148%] font-medium tracking-[1%]"
              variants={TEXT}
            >
              Мы не просто готовим стейки, мы создаём культуру, <br /> где каждый ингредиент имеет
              значение. Наши рестораны — <br /> это пространство, где турецкие традиции обращения с
              мясом <br /> встречаются с современной гастрономической эстетикой
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <motion.h3
            className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)"
            variants={TEXT}
          >
            Познать совершенный вкус <br /> авторской кухни
          </motion.h3>
          <div className="flex flex-col gap-2">
            <motion.p
              className="text-base leading-[148%] font-medium tracking-[1%]"
              variants={TEXT}
            >
              Философия ресторанов Meat_Coin строится вокруг <br /> главной ценности — премиального
              мяса
            </motion.p>
            <motion.p
              className="text-base leading-[148%] font-medium tracking-[1%]"
              variants={TEXT}
            >
              Мы не просто готовим стейки, мы создаём культуру, <br /> где каждый ингредиент имеет
              значение. Наши рестораны — <br /> это пространство, где турецкие традиции обращения с
              мясом <br /> встречаются с современной гастрономической эстетикой
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Правый орнамент — сверху вниз одновременно с левым */}
      <motion.div className="col-start-12" variants={ORNAMENT}>
        <Image src={'ornament.svg'} alt="ornament" width={260} height={66} />
      </motion.div>
    </motion.section>
  )
}
