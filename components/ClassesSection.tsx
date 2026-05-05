'use client'

import GridSection from '@/components/ui/GridSection'
import H3Title from '@/components/ui/H3Title'
import Paragraph from './ui/Paragraph'

export default function ClassesSection() {
  return (
    <GridSection className="pt-9 pb-12 md:pt-0 md:pb-30">
      <div className="col-span-5 mb-6 h-86 rounded-xl bg-[url('/classes.webp')] bg-cover md:col-span-3 md:mb-0 md:h-full md:w-full md:rounded-lg" />

      <div className="col-span-5 md:col-span-5 md:col-start-5">
        <H3Title className="mb-2" delay={0.2}>
          Искусство, которое можно увидеть
        </H3Title>

        <Paragraph delay={0.4} className="pb-6 md:col-span-4 md:pb-30">
          В ресторанах Meat_Coin регулярно проходят мастер-классы по приготовлению стейков и
          гастрономические шоу, где шефы делятся секретами мастерства
        </Paragraph>
        <Paragraph delay={0.6} className="md:col-span-4">
          Гости могут не только насладиться блюдами, но и прикоснуться к процессу создания
          идеального стейка, узнавая тонкости от настоящих профессионалов
        </Paragraph>
      </div>
    </GridSection>
  )
}
