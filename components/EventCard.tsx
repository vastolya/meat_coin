import AnimatedImage from './ui/AnimatedImage'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'
import Tag from './ui/Tag'
import type { EventItem } from '@/consts/events'

type EventCardProps = {
  event: EventItem
  className?: string
  imageClassName?: string
  delay?: number
}

export default function EventCard({
  event,
  className = '',
  imageClassName = 'h-105',
  delay = 0,
}: EventCardProps) {
  return (
    <div className={`group flex cursor-pointer flex-col ${className}`}>
      <AnimatedImage
        disableAnimation
        src={event.image}
        alt={event.title}
        sizes="(min-width: 768px) 66vw, 100vw"
        className={`w-full rounded-sm bg-(--color-devider) ${imageClassName}`}
        imgClsx="object-cover transition-transform duration-500 group-hover:scale-105"
      >
        <Tag text={event.date} variant="white" className="bg-beige absolute top-3 left-3 z-10" />
      </AnimatedImage>

      <div className="flex flex-col gap-1 py-4 md:gap-2">
        <H3Title disableAnimation className="text-dark group-hover:text-accent transition-colors">
          {event.title}
        </H3Title>
        <Paragraph disableAnimation className="text-gray">
          {event.description}
        </Paragraph>
      </div>
    </div>
  )
}
