import GridSection from '@/components/ui/GridSection'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Image from 'next/image'

const InvestorsAwardsSection = () => {
  return (
    <GridSection className="pt-30">
      <div className="col-span-3 flex flex-col gap-2">
        <Paragraph className="">Meat_Coin</Paragraph>
        <Paragraph className="text-gray">
          Это репутация, которая подтверждена независимыми экспертами рынка
        </Paragraph>
      </div>

      <div className="col-span-8 col-start-5">
        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_01.webp'}
              alt=""
              width={150}
              height={80}
              className="h-20 w-20"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>Ultima Guide</H3Title>
            <Paragraph className="text-gray">2026 (третий год подряд)</Paragraph>
          </div>

          <Paragraph className="text-gray">Топ-50 лучших ресторанов Санкт-Петербурга</Paragraph>
        </div>

        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_02.webp'}
              alt=""
              width={150}
              height={80}
              className="h-16.5 w-96 object-cover"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>Cbonds и Preqveca</H3Title>
            <Paragraph className="text-gray">2025 (раунд инвестиций Meat_Coin)</Paragraph>
          </div>

          <Paragraph className="text-gray">Лучшее размещение на рынке Pre-IPO</Paragraph>
        </div>

        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_03.webp'}
              alt=""
              width={150}
              height={80}
              className="h-20 w-49.5 object-cover"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>ADDAWARDS.RU</H3Title>
            <Paragraph className="text-gray">
              2023 (международная премия архитекторов и дизайнеров)
            </Paragraph>
          </div>

          <Paragraph className="text-gray">
            «Лучший проект: ресторан Meat_Coin Country Club»
          </Paragraph>
        </div>

        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_04.webp'}
              alt=""
              width={150}
              height={80}
              className="h-20 w-20 object-cover"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>Собака.ru</H3Title>
            <Paragraph className="text-gray">2023</Paragraph>
          </div>

          <Paragraph className="text-gray">«Лучший мясной тартар»</Paragraph>
        </div>

        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_05.webp'}
              alt=""
              width={150}
              height={80}
              className="h-20 w-81 object-cover"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>GREAT LIST</H3Title>
            <Paragraph className="text-gray">2023</Paragraph>
          </div>

          <Paragraph className="text-gray">
            «Премиальный гид по ресторанам Санкт-Петербурга»
          </Paragraph>
        </div>

        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_06.webp'}
              alt=""
              width={150}
              height={80}
              className="h-20 w-62 object-cover"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>WHERETOEAT</H3Title>
            <Paragraph className="text-gray">2022</Paragraph>
          </div>

          <Paragraph className="text-gray">
            Номинация «Лучший загородный ресторан», Meat_Coin Country Club
          </Paragraph>
        </div>

        <div className="border-border group relative flex w-full gap-7 border-b py-11">
          <div className="absolute top-1/2 -translate-x-[calc(100%+28px)] -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Image
              src={'/investors_award_07.webp'}
              alt=""
              width={150}
              height={80}
              className="h-20 w-49 object-cover"
            />
          </div>
          <div className="flex min-w-1/2 flex-col gap-2">
            <H3Title>Lemon Guide</H3Title>
            <Paragraph className="text-gray">2020</Paragraph>
          </div>

          <Paragraph className="text-gray">«Лучшие заведения Санкт-Петербурга»</Paragraph>
        </div>
      </div>
    </GridSection>
  )
}

export default InvestorsAwardsSection
