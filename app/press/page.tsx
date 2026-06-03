import MediaTabs from '@/components/MediaTabs'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'

export default function PressPage() {
  return (
    <main className="bg-white text-dark">
      <GridSection className="gap-y-14 pt-11 pb-30">
        <div className="col-span-12 mb-11 flex flex-col gap-2">
          <H1Title delay={0.2}>Пресса о нас</H1Title>
          <Paragraph delay={0.4} className="text-gray">
            Публикации, подборки и отзывы медиа о ресторанах MEAT_COIN
          </Paragraph>
        </div>

        <AnimatedDiv delay={0.6} className="col-span-12">
          <MediaTabs active="press" />
        </AnimatedDiv>
      </GridSection>
    </main>
  )
}
