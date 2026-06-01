import GridSection from '@/components/ui/GridSection'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'

export default function InvestorsRoadmapSection() {
  return (
    <GridSection className="pt-18 pb-30">
      <div className="col-start-4 pt-4">
        <div className="bg-dark-black mb-79 w-fit rotate-180 rounded-sm p-4 [writing-mode:vertical-rl]">
          <H3Title className="text-accent">2026</H3Title>
        </div>

        <div className="bg-dark-black mb-17.5 w-fit rotate-180 rounded-sm p-4 [writing-mode:vertical-rl]">
          <H3Title className="text-accent">2027</H3Title>
        </div>

        <div className="bg-dark-black mb-10 w-fit rotate-180 rounded-sm p-4 [writing-mode:vertical-rl]">
          <H3Title className="text-accent">2029</H3Title>
        </div>

        <div className="bg-dark-black w-fit rotate-180 rounded-sm p-4 [writing-mode:vertical-rl]">
          <H3Title className="text-accent">2030</H3Title>
        </div>
      </div>

      <div className="col-span-5 col-start-5 flex flex-col gap-4">
        <div>
          <div className="flex flex-col gap-2 py-4">
            <H3Title>Jidai</H3Title>
            <Tag text="Санкт-Петербург" variant="gray" />
            <Paragraph className="text-gray">
              Премиальная японская кухня в коллаборации с Алексеем Когаем — обладателем звезды
              Мишлен
            </Paragraph>
          </div>

          <div className="flex flex-col gap-2 py-4">
            <H3Title>Meat_Coin Жуковка</H3Title>
            <Tag text="Рублёвка" variant="gray" />
            <Paragraph className="text-gray">До 1 500 м² с учётом террасы</Paragraph>
          </div>

          <div className="flex flex-col gap-2 py-4">
            <H3Title>Telegraph</H3Title>
            <Tag text="Газетный пер., Москва" variant="gray" />
          </div>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <H3Title>
            Новый раунд инвестиций <br /> на расширение сети ресторанов
          </H3Title>
          <Paragraph className="text-gray">
            Развитие франшизы Meat_Coin Smart, в которой АО «Гигарест» выступает управляющей
            компанией для партнёрских проектов
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <H3Title>
            Потенциальный выход на публичный рынок при благополучной рыночной конъюнктуре
          </H3Title>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <H3Title>Целевой масштаб</H3Title>
          <Paragraph className="text-gray">
            15 ресторанов и присутствие минимум <br /> в 10 крупных городах России
          </Paragraph>
        </div>
      </div>
      <Button text="Условия инвестиций" className="col-span-12 w-full" />
    </GridSection>
  )
}
