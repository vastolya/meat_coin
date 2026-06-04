import BlogArticleCard from '@/components/BlogArticleCard'
import MediaTabs from '@/components/MediaTabs'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'

const newsArticles = [
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
]

export default function NewsPage() {
  return (
    <main className="bg-white text-dark">
      <GridSection className="pt-11 pb-12">
        <div className="col-span-12 mb-11 flex flex-col gap-2">
          <H1Title delay={0.2}>Новости</H1Title>
          <Paragraph delay={0.4} className="text-gray">
            Будьте в курсе главных событий, новостей и специальных предложений MEAT_COIN
          </Paragraph>
        </div>

        <AnimatedDiv delay={0.6} className="col-span-12">
          <MediaTabs active="news" />
        </AnimatedDiv>
      </GridSection>

      <GridSection className="pb-30">
        {newsArticles.map((article, index) => (
          <BlogArticleCard
            key={`${article.title}-${index}`}
            image={article.image}
            tag={article.tag}
            title={article.title}
            description={article.description}
            imageShape={article.imageShape}
            className={article.className}
            delay={0.1 + index * 0.08}
          />
        ))}
      </GridSection>
    </main>
  )
}
