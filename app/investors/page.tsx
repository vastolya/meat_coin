import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Ornament from '@/components/ui/Ornament'
import Paragraph from '@/components/ui/Paragraph'
import InvestorsScaleSection from '@/components/InvestorsScaleSection'
import InvestorsAwardsSection from '@/components/InvestorsAwardsSection'
import Image from 'next/image'

const Investors = () => {
  return (
    <main>
      <div className="bg-beige text-dark">
        <GridSection className="pt-18">
          <H1Title className="col-span-9">
            <span className="text-accent">Meat_Coin Инвестиции</span> в премиальный гастрономический
            опыт
          </H1Title>
          <div className="relative col-span-12 h-105 w-full rounded-sm">
            <Image src={'/investors_01.webp'} alt="Meat_Coin Инвестиции" fill />
          </div>
        </GridSection>

        <GridSection className="items-center py-30">
          <Ornament className="md:col-span-1!" color="var(--color-accent)" />

          <div className="col-span-4 col-start-5">
            <H2Title className="text-accent pb-18">Meat_Coin</H2Title>
            <Paragraph className="pb-2">
              Премиальные мясные рестораны, куда политики, знаменитости и предприниматели
              возвращаются ради авторского подхода к мясу и театрализованной подачи блюд с открытым
              огнем
            </Paragraph>
            <H3Title className="text-accent">
              Учениками самого Нусрета Гекче, он же Salt Bae
            </H3Title>
          </div>
          <Ornament className="col-span-1! col-start-12!" color="var(--color-accent)" />
        </GridSection>
      </div>

      <InvestorsScaleSection />

      <GridSection className="pt-30">
        <Image
          src={'/investors_08.webp'}
          alt="Статистика ресторанов"
          width={408}
          height={300}
          className="rounded-t-125 col-span-4 h-75 w-full"
        />
        <div className="col-span-4 flex flex-col justify-between py-7">
          <div className="flex flex-col gap-2">
            <H2Title>8 лет</H2Title>
            <Paragraph className="text-gray">На рынке</Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <H2Title>34%</H2Title>
            <Paragraph className="text-gray">Рост выручки в 2024 • 2025 году</Paragraph>
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between py-7">
          <div className="flex flex-col gap-2">
            <H2Title>6</H2Title>
            <Paragraph className="text-gray">Действующих ресторанов</Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <H2Title>755 млн ₽</H2Title>
            <Paragraph className="text-gray">Выручка за 2025</Paragraph>
          </div>
        </div>
      </GridSection>

      <InvestorsAwardsSection />
    </main>
  )
}

export default Investors
