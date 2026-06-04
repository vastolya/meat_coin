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
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-8 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Butcher&Grill',
    description: 'Санкт-Петербург · ул. Рубинштейна, 4',
    className: 'col-span-5 md:col-span-8',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Butcher&Grill',
    description: 'Санкт-Петербург · ул. Рубинштейна, 4',
    className: 'col-span-5 md:col-span-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Заголовок статьи',
    description: 'Описание',
    className: 'col-span-5 md:col-span-4 mb-6 md:mb-4',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Butcher&Grill',
    description: 'Санкт-Петербург · ул. Рубинштейна, 4',
    className: 'col-span-5 md:col-span-8',
  },
  {
    image: '/event_02.webp',
    tag: '22 мая 2022',
    title: 'Butcher&Grill',
    description: 'Санкт-Петербург · ул. Рубинштейна, 4',
    className: 'col-span-5 md:col-span-4',
  },
]

export default function NewsPage() {
  return (
    <main className="text-dark bg-white">
      <GridSection className="pt-6 pb-0 md:pt-11 md:pb-12">
        <div className="col-span-5 mb-7 flex flex-col gap-2 md:col-span-12 md:mb-11">
          <H1Title delay={0.2}>Новости</H1Title>
          <Paragraph delay={0.2} className="text-gray tracking-[1%] md:tracking-normal">
            Будьте в курсе главных событий, новостей и специальных предложений MEAT_COIN
          </Paragraph>
        </div>

        <AnimatedDiv delay={0.4} className="col-span-5 mb-11 md:col-span-12 md:mb-0">
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
            className={article.className}
            delay={0.6 + index * 0.08}
          />
        ))}
      </GridSection>
    </main>
  )
}
