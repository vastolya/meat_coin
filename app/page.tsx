import ArrowIcon from '@/components/icons/ArrowIcon'
import MailIcon from '@/components/icons/MailIcon'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Telegram from '@/components/ui/Telegram'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <>
        <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-18">
          <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
            Бренд, где выбор отрубов, выдержка <br />и прожарка — традиция поколений
          </p>
          <div className="col-span-7 flex flex-col gap-2">
            <h1 className="font-albertus text-6xl leading-[113%] font-[250] tracking-[-1%] uppercase">
              <span className="flex">
                <span className="text-accent">Meat_Coin&nbsp;</span>
                <span>сеть</span>
              </span>
              <span>мясных ресторанов</span>
            </h1>
            <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              В Москве и Санкт-Петербурге
            </p>
          </div>
        </section>

        <section className="h-170 w-full bg-[url('/video.webp')] bg-cover" />
      </>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30">
        <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
          География вкуса
        </p>
        <div className="col-span-6 flex flex-col gap-2">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            стейк-хаусы Meat_Coin в Москве и Петербурге
          </h2>
          <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
            Каждый наш ресторан имеет свой характер, но все они хранят верность
            <br />
            главному принципу — дарить гостям совершенный опыт знакомства с мясом
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-18 pb-7">
          <div className="col-span-4">
            <Tag text="Санкт-Петербург" />
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="flex w-fit items-end text-base leading-[148%] font-medium tracking-[1%]">
                Meat_Coin&nbsp;
                <span className="text-2xl leading-[116%] font-extrabold">Butcher&Grill</span>
              </p>
              <ArrowIcon height={24} width={24} />
            </div>
            <p className="text-base leading-[148%] font-medium tracking-[1%]">
              История бренда началась именно здесь, на улице Рубинштейна. Здесь сформировался <br />{' '}
              характер Meat_Coin. Аутентичное мясное меню, открытая кухня и одна из первых в городе{' '}
              <br /> камер сухого вызревания
            </p>
          </div>
        </div>
        <div className="h-118 w-full bg-[url('/butcher.webp')] bg-cover" />
      </section>

      <section>
        <div className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-18 pb-7">
          <div className="col-span-4">
            <Tag text="Москва" />
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="flex w-fit items-end text-base leading-[148%] font-medium tracking-[1%]">
                Meat_Coin&nbsp;
                <span className="text-2xl leading-[116%] font-extrabold">Steak&Terrace</span>
              </p>
              <ArrowIcon height={24} width={24} />
            </div>
            <p className="text-base leading-[148%] font-medium tracking-[1%]">
              Стейк-хаус с панорамной террасой в ТЦ «Смоленский Пассаж». Современная <br />{' '}
              интерпретация классики и авторская подача в ритме столицы
            </p>
          </div>
        </div>
        <div className="h-118 w-full bg-[url('/steak.webp')] bg-cover" />
      </section>

      <section>
        <div className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-18 pb-7">
          <div className="col-span-4">
            <Tag text="Комарово" />
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="flex w-fit items-end text-base leading-[148%] font-medium tracking-[1%]">
                Meat_Coin&nbsp;
                <span className="text-2xl leading-[116%] font-extrabold">Country Club</span>
              </p>
              <ArrowIcon height={24} width={24} />
            </div>
            <p className="text-base leading-[148%] font-medium tracking-[1%]">
              Загородный гриль-ресторан на берегу Финского залива. Идеальное место для семейного{' '}
              <br /> отдыха в окружении живописной природы. Уютный зал с камином, просторная терраса{' '}
              <br /> с видом на воду и детская комната
            </p>
          </div>
        </div>
        <div className="h-118 w-full bg-[url('/country.webp')] bg-cover" />
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 items-center gap-7 px-20 py-45">
        <Image src={'ornament.svg'} alt="ornament" width={260} height={66} />
        <div className="col-span-5 col-start-5 flex flex-col gap-30">
          <div className="flex flex-col gap-7">
            <h3 className="text-accent text-2xl leading-[116%] font-extrabold tracking-normal">
              Познать совершенный вкус <br /> авторской кухни
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                Философия ресторанов Meat_Coin строится вокруг <br /> главной ценности —
                премиального мяса
              </p>
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                Мы не просто готовим стейки, мы создаём культуру, <br /> где каждый ингредиент имеет
                значение. Наши рестораны — <br /> это пространство, где турецкие традиции обращения
                с мясом <br /> встречаются с современной гастрономической эстетикой
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)">
              Познать совершенный вкус <br /> авторской кухни
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                Философия ресторанов Meat_Coin строится вокруг <br /> главной ценности —
                премиального мяса
              </p>
              <p className="text-base leading-[148%] font-medium tracking-[1%]">
                Мы не просто готовим стейки, мы создаём культуру, <br /> где каждый ингредиент имеет
                значение. Наши рестораны — <br /> это пространство, где турецкие традиции обращения
                с мясом <br /> встречаются с современной гастрономической эстетикой
              </p>
            </div>
          </div>
        </div>
        <Image
          src={'ornament.svg'}
          alt="ornament"
          width={260}
          height={66}
          className="col-start-12"
        />
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30 pb-35">
        <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
          Хранители традиций
        </p>

        <div className="col-span-8 flex flex-col gap-2">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            Шеф-повара Meat_Coin
          </h2>
          <p className="text-base leading-[148%] font-medium tracking-[1%]">
            <span className="text-(--color-accent)">Команду Meat_Coin возглавляют шефы</span>{' '}
            с турецкой школой <br /> и глубоким пониманием ремесла
          </p>
        </div>

        <div className="col-span-4 mt-18 flex flex-col gap-4">
          <div className="relative h-191 w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-[url('/arif.webp')] bg-cover">
            <div className="absolute bottom-2 left-2">
              <Tag text="Комарово" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">Ариф Найджи</h3>
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)">
              Country Club
            </h3>
            <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Бренд-шеф Meat_Coin
            </p>
          </div>
        </div>

        <div className="col-span-4 mt-18 flex flex-col gap-4">
          <div className="relative h-191 w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-[url('/mahmet.webp')] bg-cover">
            <div className="absolute bottom-2 left-2">
              <Tag text="Москва" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
              Мехмет Найджи
            </h3>
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)">
              Steak & Terrace
            </h3>
            <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Авторский подход и баланс вкуса в столичном формате
            </p>
          </div>
        </div>

        <div className="col-span-4 mt-18 flex flex-col gap-4">
          <div className="relative h-191 w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-[url('/tolga.webp')] bg-cover">
            <div className="absolute bottom-2 left-2">
              <Tag text="Санкт-Петербург" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
              Толга Мюрекепчи
            </h3>
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)">
              Butcher & Grill
            </h3>
            <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Точность работы с мясом и энергия открытой кухни
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pb-30">
        <div className="col-span-3 h-full w-full rounded-lg bg-[url('/classes.webp')] bg-cover" />

        <div className="col-span-5 col-start-5">
          <h3 className="pb-2 text-2xl leading-[116%] font-extrabold tracking-normal">
            Искусство, которое можно увидеть
          </h3>
          <p className="col-span-4 pb-30 text-base leading-[148%] font-medium tracking-[1%]">
            В ресторанах Meat_Coin регулярно проходят мастер-классы по приготовлению стейков
            и гастрономические шоу, где шефы делятся секретами мастерства
          </p>
          <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
            Гости могут не только насладиться блюдами, но и прикоснуться к процессу создания
            идеального стейка, узнавая тонкости от настоящих профессионалов
          </p>
        </div>
      </section>

      <section className="rounded-t-[7.5rem] bg-(--color-beige) text-(--color-dark)">
        <div className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-30">
          <div className="col-span-4 flex gap-2">
            <Button text="Меню" variant="secondary" />
            <Button text="Винная карта" variant="secondary" />
          </div>
          <h2 className="font-albertus col-span-8 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            Авторская кухня и турецкие традиции мясников
          </h2>

          <div></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-30">
        <h2 className="font-albertus col-span-8 col-start-5 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
          <span className="text-accent">Meat_Coin —&nbsp;</span> пространство для ваших мероприятий
          в Москве и Санкт-Петербурге
        </h2>
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20">
        <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
          Мясная лавка: ваш идеальный стейк
        </p>
        <div className="col-span-5 flex flex-col gap-4">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            От мясного бутика до высокой кухни
          </h2>
          <div className="flex flex-col gap-2">
            <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Концепция «мясная лавка» позволяет не только попробовать, но и купить премиальные
              отрубы с собой
            </p>
            <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Мясная витрина всегда полна лучших образцов мраморной говядины для ресторанного опыта
              дома
            </p>
          </div>
        </div>
        <div className="col-span-12 mt-18 h-119 w-full rounded-lg bg-[url('/store.webp')] bg-cover" />
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-30">
        <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
          Станьте частью закрытого круга
        </p>
        <h2 className="font-albertus col-span-8 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
          Программа лояльности
        </h2>
        <div className="col-span-4 flex flex-col justify-end py-18">
          <Image src={'/loyalty.svg'} alt="loyalty" width={299} height={236} />
        </div>
        <div className="col-span-8 py-18">
          <p className="text-accent text-base leading-[148%] font-medium tracking-[1%]">
            Участники программы получают
          </p>
          {[
            'Приоритетное бронирование столов',
            'Доступ к предпродаже на специальные мероприятия',
            'Персональные предложения и накопление баллов (meat_coins)',
            'Подарочный сертификат на сумму номинала — универсальный статусный подарок',
          ].map((item) => (
            <h3
              className="border-devider border-b-[1.5px] py-11 text-2xl leading-[116%] font-extrabold tracking-normal"
              key={item}
            >
              {item}
            </h3>
          ))}
        </div>
        <div className="col-span-8 col-start-5 flex items-center gap-7">
          <Button text="оформить подарочный сертификат" variant="secondary" />
          <div className="flex cursor-pointer gap-2">
            <p className="text-accent col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              О программе лояльности
            </p>
            <ArrowIcon color="var(--color-accent)" height={24} width={24} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 px-20 py-30">
        <div className="col-span-8 col-start-5 flex flex-col gap-2 pb-7">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            Забронировать стол
          </h2>
          <p className="text-base leading-[148%] font-medium tracking-[1%]">
            Хотите увидеть магию приготовления идеального стейка своими глазами? Узнать секреты
            турецких мясников и попробовать блюда от лучших шефов?
          </p>
        </div>

        <>
          <div className="col-span-4 flex flex-col justify-between py-11">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                Steak & Terrace
              </h3>
              <Tag text="Москва" variant="gray" />
            </div>
            <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
              Бесплатный крытый паркинг для гостей
            </p>
          </div>
          <div className="col-span-6 flex flex-col gap-7 py-11">
            <div className="flex flex-col">
              <p className="text-gray pb-1 text-sm leading-[148%] font-medium tracking-[1%]">
                Адрес
              </p>
              <p className="text-sm leading-[148%] font-medium tracking-[1%]">
                Смоленская площадь • 5
              </p>
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                (отдельный вход со стороны Николощеповского переулка)
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                Режим работы
              </p>
              <div className="flex gap-4">
                <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                  Ежедневно
                </p>
                <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                  12:00 - 00:00
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <Button text="Оставить заявку" />
              <div className="flex items-center gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <MailIcon width={24} height={24} color="white" />
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <Telegram width={24} height={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative col-span-2 my-11 cursor-pointer overflow-hidden rounded-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor"
              width="100%"
              height="100%"
              className="h-full w-full rounded-lg grayscale transition-all duration-300 hover:grayscale-0"
              allowFullScreen
              title="Steak & Terrace"
            />
          </div>
          <div className="bg-devider col-span-12 h-[1.5px] w-full" />
        </>

        <>
          <div className="col-span-4 flex flex-col justify-between py-11">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                Country Club
              </h3>
              <Tag text="Комарово" variant="gray" />
            </div>
            <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
              Парковка 2 часа
            </p>
          </div>
          <div className="col-span-6 flex flex-col gap-7 py-11">
            <div className="flex flex-col">
              <p className="text-gray pb-1 text-sm leading-[148%] font-medium tracking-[1%]">
                Адрес
              </p>
              <p className="text-sm leading-[148%] font-medium tracking-[1%]">
                Ленинградская область • пос. Комарово • Приморское шоссе • 466
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                Режим работы
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                    ПН-ЧТ
                  </p>
                  <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                    12:00 - 23:00
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                    ПТ
                  </p>
                  <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                    12:00 - 01:00
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                    СБ-ВС
                  </p>
                  <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                    11:00 - 01:00
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button text="Оставить заявку" />
              <div className="flex items-center gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <MailIcon width={24} height={24} color="white" />
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <Telegram width={24} height={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 py-11">asd</div>
          <div className="bg-devider col-span-12 h-[1.5px] w-full" />
        </>

        <>
          <div className="col-span-4 flex flex-col justify-between py-11">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                Butcher&Grill
              </h3>
              <Tag text="Санкт Петербург" variant="gray" />
            </div>
            <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
              С видом на Садовое кольцо, у открытой кухни
            </p>
          </div>
          <div className="col-span-6 flex flex-col gap-7 py-11">
            <div className="flex flex-col">
              <p className="text-gray pb-1 text-sm leading-[148%] font-medium tracking-[1%]">
                Адрес
              </p>
              <p className="text-sm leading-[148%] font-medium tracking-[1%]">
                ул. Рубинштейна • 4
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                Режим работы
              </p>
              <div className="flex gap-4">
                <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                  Ежедневно
                </p>
                <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                  12:00 - 00:00
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <Button text="Оставить заявку" />
              <div className="flex items-center gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <MailIcon width={24} height={24} color="white" />
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <Telegram width={24} height={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 py-11">asd</div>
          <div className="bg-devider col-span-12 h-[1.5px] w-full" />
        </>
      </section>
    </main>
  )
}
