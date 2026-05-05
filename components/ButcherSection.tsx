'use client'

import GridSection from '@/components/ui/GridSection'
import H2Title from './ui/H2Title'
import Paragraph from './ui/Paragraph'

export default function ButcherSection() {
  return (
    <GridSection>
      <Paragraph delay={0.2} className="text-gray col-span-5 md:col-span-4">
        Мясная лавка: ваш идеальный стейк
      </Paragraph>
      <div className="col-span-5 flex flex-col gap-9 md:col-span-5 md:col-start-5 md:gap-4">
        <H2Title delay={0.4}>От мясного бутика до высокой кухни</H2Title>
        <div className="flex flex-col gap-4 md:gap-2">
          <Paragraph delay={0.6}>
            Концепция «мясная лавка» позволяет не только попробовать, но и купить премиальные отрубы
            с собой
          </Paragraph>
          <Paragraph delay={0.8}>
            Мясная витрина всегда полна лучших образцов мраморной говядины для ресторанного опыта
            дома
          </Paragraph>
        </div>
      </div>
      {/* добавить отрицательный -mx-4 картинке, когда будет готов адаптив на всей странице */}
      <div className="col-span-5 mt-9 h-98.5 w-full rounded-lg bg-[url('/store.webp')] bg-cover md:col-span-12 md:mt-18 md:h-119" />
    </GridSection>
  )
}
