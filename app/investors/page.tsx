import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Ornament from '@/components/ui/Ornament'
import Paragraph from '@/components/ui/Paragraph'
import Image from 'next/image'

const Investors = () => {
  return (
    <main>
      <div className="bg-beige text-dark">
        <GridSection className="pt-18">
          <H1Title className="col-span-9">
            <span className="text-accent">Meat_Coin Инвестиции</span> в премиальный гастрономический
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
              Премиальные мясные рестораны, куда политики, знаменитости и предприниматели
              возвращаются ради авторского подхода к мясу и театрализованной подачи блюд с открытым
              огнем
            </Paragraph>
            <H3Title className="text-accent">
              Учениками самого Нусрета Гекче, он же Salt Bae
            </H3Title>
          </div>
          <Ornament className="col-span-1! col-start-12!" color="var(--color-accent)" />
        </GridSection>
      </div>

      <GridSection className="py-30">
        <div className="col-span-5 col-start-5 flex flex-col">
          <H2Title className="pb-18">Масштабы компании</H2Title>
          <H3Title className="pb-2">За 8 лет</H3Title>
          <Paragraph>
            Компания выросла из одного ресторана на улице Рубинштейна в Санкт-Петербурге до целой
            группы ресторанов под управлением АО «Гигарест» и с локациями в Москве, Санкт-Петербурге
            и Ленинградской области
          </Paragraph>
        </div>

        <div className="col-span-4">
          <Image
            src="/investors_02.webp"
            alt="Butcher & Grill"
            width={400}
            height={420}
            className="mb-4 w-full object-cover md:h-105"
          />
          <H3Title>Butcher & Grill</H3Title>
        </div>

        <div className="col-span-4">
          <Image
            src="/investors_03.webp"
            alt="Country Club"
            width={400}
            height={420}
            className="mb-4 w-full object-cover md:h-105"
          />
          <H3Title>Country Club</H3Title>
        </div>

        <div className="col-span-4">
          <Image
            src="/investors_04.webp"
            alt="Steak & Terrace"
            width={400}
            height={420}
            className="mb-4 w-full object-cover md:h-105"
          />
          <H3Title>Steak & Terrace</H3Title>
        </div>
      </GridSection>
    </main>
  )
}

export default Investors
