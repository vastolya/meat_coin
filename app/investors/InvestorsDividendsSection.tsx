import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import FireIcon from '@/components/ui/FireIcon'
import Image from 'next/image'
import DividendsHistoryButton from './DividendsHistoryButton'

const rows = [
  { date: '22 мая 2025', period: 'II квартал 2025', amount: '> 4,0', note: 'Промежуточные дивиденды' },
  { date: '22 мая 2025', period: 'II квартал 2025', amount: '> 4,0', note: 'Промежуточные дивиденды' },
  { date: '22 мая 2025', period: 'II квартал 2025', amount: '> 4,0', note: 'Промежуточные дивиденды' },
]

export default function InvestorsDividendsSection() {
  return (
    <div className="bg-white">
      <GridSection className="text-dark gap-y-18! py-30">
        <Paragraph className="text-gray col-span-4">
          Компания выплачивает дивиденды с 2022 года. За 2024–2025 годы акционерам распределено
          около 35 млн ₽
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
            Дивидендная политика утверждена Советом директоров на период 2025–2030 гг.
          </H3Title>
          <Paragraph className="text-gray pb-2">Целевой уровень</Paragraph>
          <Paragraph className="pb-4">Не менее 95% чистой прибыли по РСБУ</Paragraph>
          <Paragraph>
            Регулярные выплаты предусмотрены начиная с 2026 года, промежуточные возможны по итогам
            квартала, полугодия или 9 месяцев по решению Совета директоров
          </Paragraph>
        </div>

        <H3Title className="col-span-4 pt-26.5">История выплат новым акционерам</H3Title>

        <div className="col-span-8">
          <div className="overflow-hidden rounded-sm border border-[#F6F5F7]">
            <div className="text-border grid grid-cols-[44px_160px__160px__160px_280px_40px] items-center bg-[#F6F5F7] py-4">
              <div />
              <Paragraph className="px-2.5">Дата</Paragraph>
              <Paragraph className="px-2.5">Период</Paragraph>
              <Paragraph className="px-2.5">Сумма (млн ₽)</Paragraph>
              <Paragraph className="px-2.5">Примечание</Paragraph>
            </div>

            {rows.map((row, i) => (
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
  )
}
