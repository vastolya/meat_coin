import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Button from '@/components/ui/Button'
import InvestorsSlider from '@/components/InvestorsSlider'

export default function InvestorsScaleSection() {
  return (
    <>
      <GridSection className="pt-30 pb-10">
        <div className="col-span-5 col-start-5 flex flex-col">
          <H2Title className="pb-18">Масштабы компании</H2Title>
          <H3Title className="pb-2">За 8 лет</H3Title>
          <Paragraph>
            Компания выросла из одного ресторана на улице Рубинштейна в Санкт-Петербурге до целой
            группы ресторанов под управлением АО «Гигарест» и с локациями в Москве, Санкт-Петербурге
            и Ленинградской области
          </Paragraph>
        </div>
      </GridSection>

      <div className="overflow-hidden pb-18">
        <InvestorsSlider />
      </div>

      <GridSection>
        <Button
          text="Узнать о возможностях инвестиций"
          variant="primary"
          className="col-span-12 w-full"
        />
      </GridSection>
    </>
  )
}
