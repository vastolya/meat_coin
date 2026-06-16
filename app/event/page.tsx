import EventCard from '@/components/EventCard'
import MarqueeRow from '@/components/MarqueeRow'
import AnimatedImage from '@/components/ui/AnimatedImage'
import ArrowTextLink from '@/components/ui/ArrowTextLink'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import { UPCOMING_EVENTS, PAST_EVENT_PHOTOS_ROWS } from '@/consts/events'

// col-span for each non-feature card → [8] [4] [4] [4] [4] [4] [8]
const CARD_SPANS = [
  'md:col-span-8',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-8',
]

export default function EventPage() {
  const [feature, ...cards] = UPCOMING_EVENTS

  return (
    <main className="bg-white text-(--color-dark)">
      <GridSection className="pt-11 pb-30">
        <H1Title className="col-span-12 md:mb-6">Ближайшие события</H1Title>

        <>
          <AnimatedImage
            src={feature.image}
            alt={feature.title}
            sizes="(min-width: 768px) 66vw, 100vw"
            delay={0.2}
            className="group col-span-6 h-105 rounded-lg"
            imgClsx="object-cover transition-transform duration-300 group-hover:scale-105"
          >
            <Tag text={feature.date} variant="beige" className="absolute top-3 left-3 z-10" />
          </AnimatedImage>

          <div className="col-span-6 flex flex-col justify-center gap-7">
            <div className="flex flex-col gap-2">
              <H2Title>{feature.title}</H2Title>
              <Paragraph className="text-gray">{feature.subtitle}</Paragraph>
              <Paragraph>{feature.description}</Paragraph>
            </div>

            <div className="flex justify-between">
              <Tag text={`${feature.date} в ${feature.time}`} variant="beige" />
              <ArrowTextLink href="#">Записаться</ArrowTextLink>
            </div>
          </div>
        </>

        {cards.map((event, i) => (
          <EventCard
            key={event.id}
            event={event}
            delay={0.3 + i * 0.07}
            className={`col-span-5 ${CARD_SPANS[i] ?? 'md:col-span-4'}`}
          />
        ))}
      </GridSection>

      {/* Past events photo gallery — heading in grid, two full-width scrollable rows */}
      <section className="pb-30">
        <GridSection className="mb-10">
          <H2Title className="text-accent col-span-12">
            Фотоотчёт с прошлых событий Meat_Coin
          </H2Title>
        </GridSection>

        <div className="flex flex-col gap-7">
          {PAST_EVENT_PHOTOS_ROWS.map((row, rowIndex) => (
            <MarqueeRow key={rowIndex} photos={row} reverse={rowIndex % 2 === 1} />
          ))}
        </div>
      </section>
    </main>
  )
}
