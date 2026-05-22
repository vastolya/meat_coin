import BookingSection from '@/components/BookingSection'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import React from 'react'

const About = () => {
  return (
    <div className="bg-beige">
      <GridSection className="pt-11">
        <div className="text-gray col-span-4 flex flex-col justify-between">
          <Paragraph>
            Три ресторана, каждый со своим характером, объединены общей философией
          </Paragraph>
          <Paragraph>Познать идеальный вкус мяса и подарить этот опыт своим гостям</Paragraph>
        </div>

        <div className="col-span-8 flex flex-col gap-2">
          <H1Title className="text-accent">
            Meat_Coin от первого ресторана на Рубинштейна{' '}
            <span className="text-dark"> до сети стейк-хаусов </span>
          </H1Title>
          <div className="flex gap-2">
            <Tag text="Санкт-Петербург" variant="white" /> <Tag text="Москва" variant="white" />{' '}
            <Tag text="Комарово" variant="white" />
          </div>
        </div>

        <div className='col-span-12 h-105 rounded-lg bg-[url("/about.webp")] bg-cover' />
      </GridSection>

      <GridSection className="py-30">
        <div className="group col-span-4 flex cursor-pointer flex-col gap-4">
          <H3Title className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out">
            Аутентичный в сердце Санкт-Петербурга
          </H3Title>
          <div className='flex h-102 items-center justify-center rounded-lg bg-[url("/about_02.webp")] bg-cover'>
            <p className="w-fit rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
              Санкт-Петербург
            </p>
          </div>
        </div>

        <div className="group col-span-4 flex cursor-pointer flex-col gap-4">
          <div className='flex h-102 items-center justify-center rounded-lg bg-[url("/about_03.webp")] bg-cover'>
            <p className="w-fit rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
              Москва
            </p>
          </div>
          <H3Title className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out">
            Ресторан с панорамным видом на Садовое кольцо
          </H3Title>
        </div>

        <div className="group col-span-4 flex cursor-pointer flex-col gap-4">
          <H3Title className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out">
            Флагманский загородный ресторан на берегу Финского залива
          </H3Title>
          <div className='flex h-95 items-center justify-center rounded-lg bg-[url("/about_04.webp")] bg-cover'>
            <p className="w-fit rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
              Комарово
            </p>
          </div>
        </div>
      </GridSection>

      <div className="text-dark bg-white">
        <GridSection className="gap-y-0!">
          <>
            <div className="col-span-4 h-255 bg-[url('/about_06.webp')] bg-cover bg-center bg-no-repeat" />
            <div className="col-span-8 flex h-full flex-col justify-between py-30">
              <div className="flex flex-col gap-18">
                <H2Title>
                  Как открывался мясной ресторан{' '}
                  <span className="text-accent">в сердце культурной столицы</span>
                </H2Title>

                <H3Title>
                  В 2017 году на Рубинштейна, 4, открыл <br /> свои двери первый ресторан Meat_Coin
                  <br />
                  Butcher&Grill
                </H3Title>
              </div>

              <div className="flex flex-col gap-2">
                <Paragraph>
                  Именно здесь впервые в России турецкие мастера
                  <br />
                  представили искусство выбора, разделки и приготовления
                  <br />
                  мяса как высокую культуру
                </Paragraph>
                <Paragraph>
                  Сегодня традиции хранит шеф Серкан Йигит, продолжая дело,
                  <br />
                  начатое у истоков
                </Paragraph>
              </div>
            </div>
          </>
          <>
            <div className="col-span-4 h-255 bg-[url('/about_07.webp')] bg-cover bg-center bg-no-repeat" />
            <div className="col-span-8 flex h-full flex-col justify-between py-30">
              <div className="flex flex-col gap-18">
                <H2Title>
                  мясной-ресторан <span className="text-accent">в Москве</span>  на Смоленской
                </H2Title>

                <H3Title>
                  Вдохновлённые успехом, основатели
                  <br />
                  решили расширяться,&nbsp;
                  <span className="text-accent">
                    так появился —
                    <br />
                    Meat_Coin Steak&Terrace в Москве
                  </span>
                </H3Title>
              </div>

              <div className="flex flex-col gap-2">
                <Paragraph>
                  Ресторан расположился на четвёртом этаже «Смоленского <br />
                  Пассажа» с отдельным входом и видом на Садовое кольцо <br />
                  и монументальное здание МИД
                </Paragraph>
                <Paragraph>
                  Панорамная терраса стала местом притяжения для тех, <br />
                  кто ценит красоту столицы с высоты
                </Paragraph>
              </div>
            </div>
          </>
          <>
            <div className="col-span-4 h-255 bg-[url('/about_08.webp')] bg-cover bg-center bg-no-repeat" />
            <div className="col-span-8 flex h-full flex-col justify-between py-30">
              <div className="flex flex-col gap-18">
                <H2Title>
                  загородный мясной-ресторан <span className="text-accent">у Финского залива</span>
                </H2Title>

                <div className="flex flex-col gap-2">
                  <H3Title className="text-accent">
                    Новый формат семейный отдых
                    <br />
                    и завтраки на природе
                  </H3Title>
                  <Paragraph>
                    Meat_Coin Country Club в Комарово стал ответом на желание создать место,
                    <br />
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
                  <br />
                  и с видом на Финский залив, этот ресторан — убежище для тех, кто ищет
                  <br />
                  уединения и гармонии
                </Paragraph>
                <Paragraph>
                  Просторный зал с камином, панорамные окна и терраса, выходящая к воде,
                  <br />
                  создают атмосферу безмятежной роскоши. Здесь предусмотрено
                  <br />
                  всё для семейного отдыха
                </Paragraph>
                <div className="flex gap-2">
                  <div className="bg-beige w-fit rounded-sm px-2 py-1">
                    <Paragraph className="text-accent">Детская комната</Paragraph>
                  </div>
                  <div className="bg-beige w-fit rounded-sm px-2 py-1">
                    <Paragraph className="text-accent">Уединенные беседки</Paragraph>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-beige w-fit rounded-sm px-2 py-1">
                    <Paragraph className="text-accent">
                      Вип-гостиная с собственным камином
                    </Paragraph>
                  </div>
                  <div className="bg-beige w-fit rounded-sm px-2 py-1">
                    <Paragraph className="text-accent">Берег моря</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </>
        </GridSection>
      </div>

      <div className="bg-dark">
        <GridSection className="py-30">
          <Paragraph className="text-gray col-span-4" delay={0.2}>
            Философия и стандарты качества
          </Paragraph>

          <div className="col-span-8">
            <H2Title className="pb-18" delay={0.4}>
              <span className="text-accent">Meat_Coin сегодня</span> сеть <br /> ресторанов с
              авторской кухней
            </H2Title>

            <H3Title className="pb-2" delay={0.6}>
              В нашем меню соседствуют простота <br /> и изысканность
            </H3Title>
            <Paragraph delay={0.8}>
              От стейков в чистом виде, позволяющих ощутить подлинный <br /> вкус мраморной
              говядины, до сложных, многослойных <br /> сочетаний, рожденных фантазией шефов
            </Paragraph>
          </div>

          <div className='col-span-12 h-105 rounded-lg bg-[url("/about_05.webp")] bg-cover' />

          <div className="col-span-5 col-start-5">
            <H3Title className="pb-4" delay={1}>
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
