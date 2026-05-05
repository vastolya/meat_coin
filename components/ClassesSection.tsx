'use client'

import GridSection from '@/components/ui/GridSection'
import H3Title from '@/components/ui/H3Title'

export default function ClassesSection() {
  return (
    <GridSection className="pb-30">
      <div className="col-span-3 h-full w-full rounded-lg bg-[url('/classes.webp')] bg-cover" />

      <div className="col-span-5 col-start-5">
        <H3Title>Искусство, которое можно увидеть</H3Title>

        <p className="col-span-4 pb-30 text-base leading-[148%] font-medium tracking-[1%]">
          В ресторанах Meat_Coin регулярно проходят мастер-классы по приготовлению стейков и
          гастрономические шоу, где шефы делятся секретами мастерства
        </p>
        <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
          Гости могут не только насладиться блюдами, но и прикоснуться к процессу создания
          идеального стейка, узнавая тонкости от настоящих профессионалов
        </p>
      </div>
    </GridSection>
  )
}
