import BlogArticleCard from '@/components/BlogArticleCard'
import MediaTabs from '@/components/MediaTabs'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedImage from '@/components/ui/AnimatedImage'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import Paragraph from '@/components/ui/Paragraph'
import Image from 'next/image'

const blogArticles = [
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

export default function BlogPage() {
  return (
    <main className="text-dark bg-white">
      <GridSection className="pt-11 pb-12">
        <div className="col-span-12 mb-11 flex flex-col gap-2">
          <H1Title delay={0.2}>Блог Meat_Coin</H1Title>
          <Paragraph delay={0.2} className="text-gray">
            Будьте в курсе главных событий, новостей и специальных предложений MEAT_COIN{' '}
          </Paragraph>
        </div>

        <AnimatedDiv delay={0.4} className="col-span-12 mb-4">
          <MediaTabs active="blog" />
        </AnimatedDiv>

        <AnimatedImage
          src="/blog_1.webp"
          alt="Гид по организации свадьбы"
          sizes="(min-width: 768px) 66vw, 100vw"
          delay={0.6}
          className="col-span-8 h-140.75 rounded-sm"
        />

        <AnimatedDiv delay={0.6} className="col-span-4 flex flex-col justify-center gap-7">
          <div className="flex flex-col gap-2">
            <H2Title>Гид по организа ции свадьбы</H2Title>
            <Paragraph>Пошаговый гид по организации свадьбы</Paragraph>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/avatar_blog.webp"
              className="h-12 w-12 rounded-full object-cover"
              alt="Автор статьи"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <Paragraph disableAnimation className="text-gray text-2xl leading-[120%]">
                Илья
              </Paragraph>
              <Paragraph disableAnimation className="text-gray text-2xl leading-[120%]">
                11 Янв 2022&nbsp;&nbsp;•&nbsp;&nbsp;5 мин чтения
              </Paragraph>
            </div>
          </div>
        </AnimatedDiv>
      </GridSection>

      <GridSection className="pb-30">
        {blogArticles.map((article, index) => (
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
