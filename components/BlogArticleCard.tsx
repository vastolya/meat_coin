import AnimatedDiv from './ui/AnimatedDiv'
import AnimatedImage from './ui/AnimatedImage'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'
import Tag from './ui/Tag'

type BlogArticleCardProps = {
  image: string
  tag: string
  title: string
  description: string
  className?: string
  delay?: number
}

export default function BlogArticleCard({
  image,
  tag,
  title,
  description,
  className = '',
  delay = 0,
}: BlogArticleCardProps) {
  return (
    <AnimatedDiv delay={delay} className={`group flex flex-col gap-2 md:gap-4 ${className}`}>
      <AnimatedImage
        disableAnimation
        src={image}
        alt={title}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="h-105 w-full rounded-sm bg-beige"
      >
        <Tag
          text={tag}
          variant="white"
          className="absolute top-2 left-2 z-10 bg-beige text-accent"
        />
      </AnimatedImage>

      <div className="flex flex-col gap-1 md:gap-2">
        <H3Title disableAnimation className="text-dark transition-colors group-hover:text-accent">
          {title}
        </H3Title>
        <Paragraph disableAnimation className="text-gray">
          {description}
        </Paragraph>
      </div>
    </AnimatedDiv>
  )
}
