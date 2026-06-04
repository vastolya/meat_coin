import BlogArticleCard from '@/components/BlogArticleCard'
import MediaTabs from '@/components/MediaTabs'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'
import Image from 'next/image'

const pressArticles = [
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'wide' as const,
    className: 'col-span-8 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Butcher&Grill',
    description: 'Санкт-Петербург · ул. Рубинштейна, 4',
    imageShape: 'wide' as const,
    className: 'col-span-8',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Butcher&Grill',
    description: 'Санкт-Петербург · ул. Рубинштейна, 4',
    imageShape: 'square' as const,
    className: 'col-span-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    imageShape: 'square' as const,
    className: 'col-span-4 mb-4',
  },
]

export default function PressPage() {
  return (
    <main className="text-dark bg-white">
      <GridSection className="pt-11 pb-12">
        <div className="col-span-12 mb-4 flex flex-col gap-2">
          <H1Title delay={0.2}>Что о нас говорят</H1Title>
          <Paragraph delay={0.2} className="text-gray">
            Будьте в курсе главных событий, новостей и специальных предложений MEAT_COIN
          </Paragraph>
        </div>

        <AnimatedDiv delay={0.4} className="col-span-12 mb-11 grid grid-cols-12 items-center">
          <div className="col-span-1 col-start-2 flex justify-center">
            <Image src="/press_01.svg" alt="Хорошее место 2025" width={89} height={80} />
          </div>

          <div className="col-span-1 col-start-5 flex justify-center">
            <Image src="/press_03.svg" alt="Ultima Guide 2025" width={80} height={80} />
          </div>

          <div className="col-span-3 col-start-7 flex justify-center">
            <Image src="/press_02.svg" alt="Great List" width={299} height={46} />
          </div>

          <div className="col-span-1 col-start-11 flex justify-center">
            <Image src="/press_04.svg" alt="Что где есть" width={80} height={80} />
          </div>
        </AnimatedDiv>

        <AnimatedDiv delay={0.6} className="col-span-12">
          <MediaTabs active="press" />
        </AnimatedDiv>
      </GridSection>

      <GridSection className="pb-30">
        {pressArticles.map((article, index) => (
          <BlogArticleCard
            key={`${article.title}-${index}`}
            image={article.image}
            tag={article.tag}
            title={article.title}
            description={article.description}
            imageShape={article.imageShape}
            className={article.className}
            delay={0.8 + index * 0.08}
          />
        ))}
      </GridSection>
    </main>
  )
}
