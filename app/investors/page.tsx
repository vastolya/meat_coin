import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Ornament from '@/components/ui/Ornament'
import Paragraph from '@/components/ui/Paragraph'
import InvestorsScaleSection from '@/app/investors/InvestorsScaleSection'
import InvestorsAwardsSection from '@/app/investors/InvestorsAwardsSection'
import InvestorsGrowthSection from '@/app/investors/InvestorsGrowthSection'
import InvestorsRoadmapSection from '@/app/investors/InvestorsRoadmapSection'
import InvestorsCapitalSection from '@/app/investors/InvestorsCapitalSection'
import Image from 'next/image'
import CorporateDocuments from './CorporateDocuments'
import FireIcon from '@/components/ui/FireIcon'
import ArrowIcon from '@/components/icons/ArrowIcon'
import DividendsHistoryButton from './DividendsHistoryButton'

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

      <InvestorsGrowthSection />

      <InvestorsRoadmapSection />

      <InvestorsCapitalSection />

      <GridSection className="py-30">
        <H2Title className="col-span-4">Корпоративные документы</H2Title>
        <div className="col-span-8">
          <CorporateDocuments />
        </div>
      </GridSection>

      <div className="bg-white">
        <GridSection className="text-dark gap-y-18! py-30">
          <Paragraph className="text-gray col-span-4">
            Компания выплачивает дивиденды с 2022 года. За 2024–2025 годы акционерам распределено
            около 35 млн ₽
          </Paragraph>
          <H2Title className="col-span-8">История дивидендных выплат</H2Title>
          <Image
            src={'/investors_mc_logo.webp'}
            alt="Meat_Coin логтип"
            width={406}
            height={216}
            className="col-span-4 h-54 w-full"
          />
          <div className="col-span-6">
            <H3Title className="pb-4">
              Дивидендная политика утверждена Советом директоров на период 2025–2030 гг.
            </H3Title>

            <Paragraph className="text-gray pb-2">Целевой уровень</Paragraph>

            <Paragraph className="pb-4">Не менее 95% чистой прибыли по РСБУ</Paragraph>

            <Paragraph>
              Регулярные выплаты предусмотрены начиная с 2026 года, промежуточные возможны по итогам
              квартала, полугодия или 9 месяцев по решению Совета директоров
            </Paragraph>
          </div>

          <H3Title className="col-span-4 pt-26.5">История выплат новым акционерам</H3Title>

          <div className="col-span-8">
            <div className="overflow-hidden rounded-sm border border-[#F6F5F7]">
              {/* Header */}
              <div className="text-border grid grid-cols-[44px_160px__160px__160px_280px_40px] items-center bg-[#F6F5F7] py-4">
                <div />
                <Paragraph className="px-2.5">Дата</Paragraph>
                <Paragraph className="px-2.5">Период</Paragraph>
                <Paragraph className="px-2.5">Сумма (млн ₽)</Paragraph>
                <Paragraph className="px-2.5">Примечание</Paragraph>
              </div>

              {/* Rows */}
              {[
                {
                  date: '22 мая 2025',
                  period: 'II квартал 2025',
                  amount: '> 4,0',
                  note: 'Промежуточные дивиденды',
                },
                {
                  date: '22 мая 2025',
                  period: 'II квартал 2025',
                  amount: '> 4,0',
                  note: 'Промежуточные дивиденды',
                },
                {
                  date: '22 мая 2025',
                  period: 'II квартал 2025',
                  amount: '> 4,0',
                  note: 'Промежуточные дивиденды',
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[44px_160px__160px__160px_280px_40px] items-center border-t border-[#F6F5F7] py-3.5"
                >
                  <div className="px-2.5">
                    <FireIcon />
                  </div>

                  <Paragraph className="px-2.5">{row.date}</Paragraph>
                  <Paragraph className="px-2.5">{row.period}</Paragraph>
                  <Paragraph className="px-2.5">{row.amount}</Paragraph>
                  <Paragraph className="px-2.5">{row.note}</Paragraph>
                </div>
              ))}
            </div>

            <DividendsHistoryButton />
          </div>
        </GridSection>
      </div>
    </main>
  )
}

export default Investors
