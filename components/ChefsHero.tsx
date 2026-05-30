'use client'

import AnimatedDiv from '@/components/ui/AnimatedDiv'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import { motion } from 'motion/react'
import Image from 'next/image'

const ChefsHero = () => {
  return (
    <GridSection className="pt-11">
      <Paragraph delay={0.2} className="text-accent col-span-5 md:col-span-4">
        Турецкие мастера Meat_Coin
      </Paragraph>

      <div className="col-span-5 flex flex-col gap-2 md:col-span-8">
        <H1Title delay={0.4}>
          ученики Нусрета и звёзды эксклюзивных гастрономичес
          <br className="md:hidden" />
          ких шоу
        </H1Title>
        <motion.div
          className="flex gap-2"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.6 }}
        >
          <Tag text="Санкт-Петербург" variant="white" />
          <Tag text="Москва" variant="white" />
        </motion.div>
      </div>

      <AnimatedDiv
        delay={0.8}
        className="relative col-span-5 h-51 overflow-hidden rounded-lg md:col-span-12 md:h-105"
      >
        <Image
          src="/chefs.webp"
          alt="Турецкие шефы Meat Coin за приготовлением мяса"
          fill
          sizes="(max-width: 768px) calc(100vw - 32px), 1280px"
          className="scale-170 object-cover object-[0%_42%] md:scale-145 md:object-[50%_44%]"
        />
      </AnimatedDiv>
    </GridSection>
  )
}

export default ChefsHero
