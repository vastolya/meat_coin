'use client'

import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import { motion } from 'motion/react'
import AnimatedDiv from '@/components/ui/AnimatedDiv'

const ChefsHero = () => {
  return (
    <GridSection className="pt-11">
      <Paragraph delay={0.2} className="text-accent col-span-4">
        Турецкие мастера Meat_Coin
      </Paragraph>
      <div className="col-span-8 flex flex-col gap-2">
        <H1Title delay={0.4}>ученики Нусрета и звёзды эксклюзивных гастрономических шоу</H1Title>
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
        className='col-span-12 h-105 rounded-lg bg-[url("/chefs.webp")] bg-cover'
      />
    </GridSection>
  )
}

export default ChefsHero
