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
]

export default function PressPage() {
  return (
    <main className="text-dark bg-white">
      <GridSection className="pt-6 pb-0 md:pt-11 md:pb-12">
        <div className="col-span-5 mb-7 flex flex-col gap-2 md:col-span-12 md:mb-4">
          <H1Title delay={0.2}>Что о нас говорят</H1Title>
          <Paragraph delay={0.2} className="text-gray tracking-[1%] md:tracking-normal">
            Будьте в курсе главных событий, новостей и специальных предложений MEAT_COIN
          </Paragraph>
        </div>

        <AnimatedDiv
          delay={0.4}
          className="col-span-5 mb-9 flex items-center justify-between gap-3 md:col-span-12 md:mb-11 md:grid md:grid-cols-12 md:gap-0"
        >
          <div className="flex shrink-0 justify-center md:col-span-1 md:col-start-2">
            <Image
              src="/press_01.svg"
              alt="Хорошее место 2025"
              width={89}
              height={80}
              className="h-12 w-auto md:h-auto"
            />
          </div>

          <div className="flex shrink-0 justify-center md:col-span-1 md:col-start-5">
            <Image
              src="/press_03.svg"
              alt="Ultima Guide 2025"
              width={80}
              height={80}
              className="h-12 w-auto md:h-auto"
            />
          </div>

          <div className="flex min-w-0 justify-center md:col-span-3 md:col-start-7">
            <Image
              src="/press_02.svg"
              alt="Great List"
              width={299}
              height={46}
              className="h-auto w-30 md:w-auto"
            />
          </div>

          <div className="flex shrink-0 justify-center md:col-span-1 md:col-start-11">
            <Image
              src="/press_04.svg"
              alt="Что где есть"
              width={80}
              height={80}
              className="h-12 w-auto md:h-auto"
            />
          </div>
        </AnimatedDiv>

        <AnimatedDiv delay={0.6} className="col-span-5 mb-11 md:col-span-12 md:mb-0">
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
            className={article.className}
            delay={0.8 + index * 0.08}
          />
        ))}
      </GridSection>
    </main>
  )
}
