import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-18">
        <p className="col-span-4 text-[16px] leading-[148%] font-medium tracking-[0.01em] text-(--color-gray)">
          Бренд, где выбор отрубов, выдержка <br />и прожарка — традиция поколений
        </p>
        <div className="col-span-7 flex flex-col gap-2">
          <h1 className="font-albertus text-6xl leading-[113%] font-[250] tracking-[-0.01em] uppercase">
            <span className="flex">
              <span className="text-(--color-accent)">Meat_Coin&nbsp;</span>
              <span>сеть</span>
            </span>
            <span>мясных ресторанов</span>
          </h1>
          <p className="col-span-4 text-[16px] leading-[148%] font-medium tracking-[0.01em]">
            В Москве и Санкт-Петербурге
          </p>
        </div>
      </section>

      <section className="h-170 w-full bg-[url('/video.webp')] bg-cover" />

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pt-30">
        <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
          География вкуса
        </p>
        <div className="col-span-6 flex flex-col gap-2">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            стейк-хаусы Meat_Coin в Москве и Петербурге
          </h2>
          <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%] text-(--color-gray)">
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
              <Image src={'/arrow.svg'} alt="arrow" width={24} height={24} />
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
              <Image src={'/arrow.svg'} alt="arrow" width={24} height={24} />
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
              <Image src={'/arrow.svg'} alt="arrow" width={24} height={24} />
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
        <p className="col-span-4 text-base leading-[148%] font-medium tracking-[0.01em] text-(--color-gray)">
          Хранители традиций
        </p>

        <div className="col-span-8 flex flex-col gap-2">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            Шеф-повара Meat_Coin
          </h2>
          <p className="text-base leading-[148%] font-medium tracking-[0.01em]">
            <span className="text-(--color-accent)">Команду Meat_Coin возглавляют шефы</span>{' '}
            с турецкой школой <br /> и глубоким пониманием ремесла
          </p>
        </div>

        <div className="col-span-4 mt-18 flex flex-col gap-4">
          <div className="relative h-[764px] w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-gray-600">
            <div className="absolute bottom-2 left-2">
              <Tag text="Комарово" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">Ариф Найджи</h3>
            <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal text-(--color-accent)">
              Country Club
            </h3>
            <p className="col-span-4 text-base leading-[148%] font-medium tracking-[0.01em] text-(--color-gray)">
              Бренд-шеф Meat_Coin
            </p>
          </div>
        </div>

        <div className="col-span-4 mt-18 flex flex-col gap-4">
          <div className="relative h-[764px] w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-gray-600">
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
            <p className="col-span-4 text-base leading-[148%] font-medium tracking-[0.01em] text-(--color-gray)">
              Авторский подход и баланс вкуса в столичном формате
            </p>
          </div>
        </div>

        <div className="col-span-4 mt-18 flex flex-col gap-4">
          <div className="relative h-[764px] w-full overflow-hidden rounded-t-[500px] rounded-b-lg border-2 border-black bg-gray-600">
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
            <p className="col-span-4 text-base leading-[148%] font-medium tracking-[0.01em] text-(--color-gray)">
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
          <p className="col-span-4 pb-30 text-base leading-[148%] font-medium tracking-[0.01em]">
            В ресторанах Meat_Coin регулярно проходят мастер-классы по приготовлению стейков
            и гастрономические шоу, где шефы делятся секретами мастерства
          </p>
          <p className="col-span-4 text-base leading-[148%] font-medium tracking-[0.01em]">
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
        </div>
      </section>
    </main>
  )
}
