import AboutLocationsMobile from '@/components/AboutLocationsMobile'
import BookingSection from '@/components/BookingSection'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedImage from '@/components/ui/AnimatedImage'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import PatternIcon from '@/components/ui/PatternIcon'
import Tag from '@/components/ui/Tag'

const About = () => {
  return (
    <div className="bg-beige">
      <GridSection className="pt-11">
        <AnimatedDiv
          delay={0.2}
          className="text-gray col-span-5 flex flex-col justify-between md:col-span-4"
        >
          <Paragraph>
            Три ресторана, каждый со своим характером, объединены общей философией
          </Paragraph>
          <Paragraph className="hidden md:block">
            Познать идеальный вкус мяса и подарить этот опыт своим гостям
          </Paragraph>
        </AnimatedDiv>

        <div className="col-span-5 flex flex-col gap-2 md:col-span-8">
          <H1Title delay={0.4} className="text-accent">
            Meat_Coin от первого ресторана на Рубинште
            <br className="md:hidden" />
            йна <span className="text-dark"> до сети стейк-хаусов </span>
          </H1Title>
          <AnimatedDiv
            delay={{ mobile: 0.6, desktop: 0.4 }}
            className="mb-5 flex flex-wrap gap-2 md:mb-0"
          >
            <Tag text="Санкт-Петербург" variant="white" />
            <Tag text="Москва" variant="white" />
            <Tag text="Комарово" variant="white" />
          </AnimatedDiv>
        </div>

        <AnimatedImage
          src="/about.webp"
          alt="Интерьер ресторана Meat_Coin"
          sizes="100vw"
          className="col-span-5 h-51 rounded-sm md:col-span-12 md:h-105"
          delay={1}
        />
      </GridSection>

      <GridSection className="py-12 md:items-center md:py-30">
        <AnimatedDiv
          delay={0.2}
          className="col-span-5 mb-12 flex justify-center gap-6 md:col-span-1 md:mb-0 md:block md:gap-0"
        >
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
        </AnimatedDiv>

        <div className="text-devider col-span-5 flex flex-col md:col-start-5">
          <div className="flex flex-col gap-9 md:gap-7">
            <H2Title delay={0.4}>
              Путь длинною
              <br />в десятилетие
            </H2Title>

            <AnimatedDiv delay={0.6} className="flex flex-col gap-2">
              <Paragraph>
                История бренда Meat_Coin началась с путешествия основателей в Турцию — страну с
                богатыми традициями обращения с мясом
              </Paragraph>
              <Paragraph>
                Там была собрана команда из опытных шефов-мясников, ставших ключевыми фигурами в
                создании аутентичного мясного меню
              </Paragraph>
            </AnimatedDiv>
          </div>

          <div className="mt-6 flex flex-col gap-2 md:mt-18">
            <H3Title delay={0.8}>
              Сегодня Meat_Coin — это бренд, объединивший три культовых мясных ресторана
            </H3Title>

            <Paragraph delay={1}>
              Мы используем только мраморную говядину высших категорий и камеры сухого вызревания,
              чтобы раскрыть глубину вкуса. Каждое блюдо отражает наше стремление к идеалу и дарит
              гостям подлинное гастрономическое путешествие
            </Paragraph>
          </div>
        </div>

        <AnimatedDiv
          delay={0.2}
          className="col-span-5 mt-10 flex justify-center gap-6 md:col-span-1 md:col-start-12 md:mt-0 md:block md:gap-0"
        >
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
          <PatternIcon size={76} color="var(--color-border)" />
        </AnimatedDiv>
      </GridSection>

      <GridSection className="pt-0 pb-12 md:py-30">
        <AboutLocationsMobile />

        <div className="hidden md:contents">
          <AnimatedDiv
            className="group col-span-4 flex cursor-pointer flex-col gap-4"
          >
            <H3Title
              disableAnimation
              className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out"
            >
              Аутентичный в сердце <br /> Санкт-Петербурга
            </H3Title>
            <AnimatedImage
              disableAnimation
              src="/about_02.webp"
              alt="Ресторан Meat_Coin в Санкт-Петербурге"
              className="flex h-102 items-center justify-center rounded-sm"
            >
              <p className="relative z-10 w-fit rounded-sm bg-white/10 p-3 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
                Рубинштейна
              </p>
            </AnimatedImage>
          </AnimatedDiv>

          <AnimatedDiv
            className="group col-span-4 flex cursor-pointer flex-col gap-4"
          >
            <AnimatedImage
              disableAnimation
              src="/about_03.webp"
              alt="Ресторан Meat_Coin в Москве"
              className="flex h-102 items-center justify-center rounded-sm"
            >
              <p className="relative z-10 w-fit rounded-sm bg-white/10 p-3 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
                В центре Москвы
              </p>
            </AnimatedImage>
            <H3Title
              disableAnimation
              className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out"
            >
              Ресторан с панорамным видом на Садовое кольцо
            </H3Title>
          </AnimatedDiv>

          <AnimatedDiv
            className="group col-span-4 flex cursor-pointer flex-col gap-4"
          >
            <H3Title
              disableAnimation
              className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out"
            >
              Флагманский загородный ресторан на берегу Финского залива
            </H3Title>
            <AnimatedImage
              disableAnimation
              src="/about_04.webp"
              alt="Загородный ресторан Meat_Coin в Комарово"
              className="flex h-95 items-center justify-center rounded-sm"
            >
              <p className="relative z-10 w-fit rounded-sm bg-white/10 p-3 text-2xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
                Комарово
              </p>
            </AnimatedImage>
          </AnimatedDiv>
        </div>
      </GridSection>

      <div className="bg-white">
        <GridSection className="text-dark w-full gap-y-0!">
          <AnimatedImage
            src="/about_06.webp"
            alt="Первый ресторан Meat_Coin на Рубинштейна"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="col-span-5 -mx-4 h-98 md:col-span-4 md:mx-0 md:-ml-20 md:h-225 md:w-122"
          />

          <div className="col-span-5 flex h-full flex-col justify-between py-12 md:col-span-8 md:py-30">
            <div className="mb-4 flex flex-col gap-9 md:mb-0 md:gap-18">
              <H2Title>
                Как открывался мясной ресторан{' '}
                <span className="text-accent">в сердце культурной столицы</span>
              </H2Title>

              <H3Title>
                В 2017 году на Рубинштейна, 4, открыл <br className="hidden md:block" /> свои двери
                первый ресторан Meat_Coin 
                <br className="hidden md:block" />
                Butcher&Grill
              </H3Title>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph>
                Именно здесь впервые в России турецкие мастера <br className="hidden md:block" />
                представили искусство выбора, разделки и приготовления{' '}
                <br className="hidden md:block" />
                мяса как высокую культуру
              </Paragraph>
              <Paragraph>
                Сегодня традиции хранит шеф Серкан Йигит, продолжая дело,{' '}
                <br className="hidden md:block" />
                начатое у истоков
              </Paragraph>
            </div>
          </div>

          <AnimatedImage
            src="/about_07.webp"
            alt="Meat_Coin Steak&Terrace на Смоленской"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="col-span-5 -mx-4 h-98 md:col-span-4 md:mx-0 md:-ml-20 md:h-225 md:w-122"
          />

          <div className="col-span-5 flex h-full flex-col justify-between pt-12 pb-9 md:col-span-8 md:py-30">
            <div className="flex flex-col gap-9 md:gap-18">
              <H2Title>
                мясной-ресторан <span className="text-accent">в Москве</span>  на Смоленской
              </H2Title>

              <H3Title className="mb-4 md:mb-0">
                Вдохновлённые успехом, основатели
                <br className="hidden md:block" />
                решили расширяться,&nbsp;
                <span className="md:text-accent">
                  так появился —
                  <br className="hidden md:block" />
                  Meat_Coin Steak&Terrace в Москве
                </span>
              </H3Title>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph>
                Ресторан расположился на четвёртом этаже «Смоленского{' '}
                <br className="hidden md:block" />
                Пассажа» с отдельным входом и видом на Садовое кольцо{' '}
                <br className="hidden md:block" />
                и монументальное здание МИД
              </Paragraph>
              <Paragraph>
                Панорамная терраса стала местом притяжения для тех,{' '}
                <br className="hidden md:block" />
                кто ценит красоту столицы с высоты
              </Paragraph>
            </div>
          </div>

          <AnimatedImage
            src="/about_08.webp"
            alt="Meat_Coin Country Club у Финского залива"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="col-span-5 -mx-4 h-98 md:col-span-4 md:-ml-20 md:h-225 md:w-122"
          />

          <div className="col-span-5 flex h-full flex-col justify-between pt-12 pb-9 md:col-span-8 md:py-30">
            <div className="flex flex-col gap-9 md:gap-18">
              <H2Title>
                загородный мясной-ресторан <span className="text-accent">у Финского залива</span>
              </H2Title>

              <div className="mb-4 flex flex-col gap-2 md:mb-0">
                <H3Title className="md:text-accent">
                  Новый формат семейный отдых
                  <br className="hidden md:block" />
                  и завтраки на природе
                </H3Title>
                <Paragraph>
                  Meat_Coin Country Club в Комарово стал ответом на желание создать место,
                  <br className="hidden md:block" />
                  где гастрономия встречается с природой
                </Paragraph>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph className="text-gray">
                Ленинградская область • пос.. Комарово • Приморское шоссе • 466
              </Paragraph>
              <Paragraph>
                Расположенный на Приморском шоссе, 466, в окружении вековых сосен
                <br className="hidden md:block" />
                и с видом на Финский залив, этот ресторан — убежище для тех, кто ищет
                <br className="hidden md:block" />
                уединения и гармонии
              </Paragraph>
              <Paragraph>
                Просторный зал с камином, панорамные окна и терраса, выходящая к воде,
                <br className="hidden md:block" /> создают атмосферу безмятежной роскоши. Здесь
                предусмотрено
                <br className="hidden md:block" /> всё для семейного отдыха
              </Paragraph>

              <div className="flex gap-2">
                <div className="bg-beige w-fit rounded-sm px-2 py-1">
                  <Paragraph className="text-accent">Детская комната</Paragraph>
                </div>
                <div className="bg-beige w-fit rounded-sm px-2 py-1">
                  <Paragraph className="text-accent">Уединенные беседки</Paragraph>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-beige w-fit rounded-sm px-2 py-1">
                  <Paragraph className="text-accent">Вип-гостиная с собственным камином</Paragraph>
                </div>
                <div className="bg-beige w-fit rounded-sm px-2 py-1">
                  <Paragraph className="text-accent">Берег моря</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </GridSection>
      </div>

      <div className="bg-dark">
        <GridSection className="bg-dark w-full py-12 md:py-30">
          <Paragraph className="text-gray col-span-5 md:col-span-4" delay={0.2}>
            Философия и стандарты качества
          </Paragraph>

          <div className="col-span-5 mb-4 md:col-span-8 md:mb-0">
            <H2Title className="text-accent pb-9 md:pb-18" delay={0.4}>
              Meat_Coin сегодня сеть <br className="hidden md:block" /> ресторанов с авторской
              кухней
            </H2Title>

            <H3Title className="pb-2" delay={0.6}>
              В нашем меню соседствуют простота <br className="hidden md:block" /> и изысканность
            </H3Title>
            <Paragraph delay={0.8}>
              От стейков в чистом виде, позволяющих ощутить подлинный{' '}
              <br className="hidden md:block" /> вкус мраморной говядины, до сложных, многослойных{' '}
              <br className="hidden md:block" /> сочетаний, рожденных фантазией шефов
            </Paragraph>
          </div>

          <AnimatedImage
            src="/about_05.webp"
            alt="Блюда авторской кухни Meat_Coin"
            sizes="100vw"
            className="col-span-5 -mx-4 h-119 rounded-sm md:col-span-12 md:mx-0 md:my-4"
            imgClsx="scale-100 object-cover object-[50%_15%] md:object-[50%_43%] md:scale-100"
          />

          <div className="col-span-5 mt-4 md:col-start-5 md:mt-0">
            <H3Title className="pb-2 md:pb-4" delay={1}>
              Три локации — одна история
            </H3Title>
            <Paragraph className="pb-2" delay={1.2}>
              Каждый из трёх ресторанов живёт своей жизнью, но все они — главы одной книги. Книги
              о страсти, преданности делу и бесконечном поиске совершенства
            </Paragraph>
            <Paragraph delay={1.4}>
              Путь от первого ресторана на Рубинштейна до загородного клуба в Комарово — это история
              роста, дерзости и любви к своему делу
            </Paragraph>
          </div>
        </GridSection>
      </div>

      <div className="bg-dark">
        <BookingSection />
      </div>
    </div>
  )
}

export default About
