'use client'

import BookingSection from '@/components/BookingSection'
import ChefScrollSection from '@/components/ChefScrollSection'
import ChefsHero from '@/components/ChefsHero'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import PatternIcon from '@/components/ui/PatternIcon'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'

const Chefs = () => {
  return (
    <div className="bg-beige text-dark">
      <ChefsHero />

      <GridSection className="py-84">
        <div className="col-span-1 col-start-1">
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
        </div>

        <div className="col-span-5 col-start-5 flex flex-col justify-center">
          <H3Title className="pb-7" delay={0.2}>
            История бренда Meat Coin началась с путешествия основателей в Турцию — страну, где мясо
            возведено в культ
          </H3Title>

          <Paragraph className="pb-2" delay={0.4}>
            Там, в сердце восточной гастрономии, они встретили мастеров, для которых работа с мясом
            — дело чести. Так команда Meat_Coin обрела своих главных героев - Турецких мастеров
          </Paragraph>

          <H3Title className="text-border" delay={0.6}>
            Учеников самого Нусрета Гекче, <br /> он же Salt Bae{' '}
          </H3Title>
        </div>

        <div className="col-span-1 col-start-12">
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
        </div>
      </GridSection>

      <ChefScrollSection />

      <GridSection className="py-30">
        <Paragraph delay={0.2} className="text-accent col-span-4">
          Искусство, которое можно увидеть
        </Paragraph>
        <H2Title delay={0.4} className="col-span-8">
          мастер-классы <br /> и гастрономические шоу
        </H2Title>
        <div className="relative col-span-4 h-151">
          <Image src={'/mk_01.webp'} alt="" width={300} height={300} className="absolute right-0" />
          <Image src={'/mk_02.webp'} alt="" width={300} height={300} className="absolute top-41" />
          <Image
            src={'/mk_03.webp'}
            alt=""
            width={300}
            height={300}
            className="absolute top-78.5 right-0"
          />
        </div>
        <div className="col-span-5">
          <H3Title delay={0.6} className="py-32">
            Рестораны Meat_Coin — это не только место для изысканной трапезы, но и пространство, где
            гастрономия становится искусством
          </H3Title>
          <H3Title delay={0.8} className="text-accent pb-4">
            Регулярно в
          </H3Title>

          <AnimatedDiv className="flex gap-2 pb-4" delay={1}>
            <Tag text="Москве" variant="white" />
            <Tag text="Санкт-Петербурге" variant="white" />
            <Tag text="Комарово" variant="white" />
          </AnimatedDiv>

          <Paragraph delay={1.2}>
            Проходят мастер-классы по приготовлению стейков и эксклюзивные гастрономические шоу.
            Гости становятся свидетелями того, как рождается идеальный вкус, и могут перенять опыт у
            лучших турецких мастеров
          </Paragraph>
        </div>
      </GridSection>

      <div className="bg-dark text-white">
        <BookingSection />
      </div>
    </div>
  )
}

export default Chefs
