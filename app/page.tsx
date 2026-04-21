import Tag from "@/components/ui/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-12 gap-7 max-w-360 mx-auto py-18 px-20">
        <p className="font-medium text-[16px] leading-[148%] tracking-[0.01em] col-span-4  text-(--color-gray)">
          Бренд, где выбор отрубов, выдержка <br />и прожарка — традиция
          поколений
        </p>
        <div className="col-span-7 flex flex-col gap-2">
          <h1 className="font-albertus font-[250] text-6xl leading-[113%] tracking-[-0.01em] uppercase">
            <span className="flex">
              <span className="text-(--color-accent)">Meat_Coin&nbsp;</span>
              <span>сеть</span>
            </span>
            <span>мясных ресторанов</span>
          </h1>
          <p className="font-medium text-[16px] leading-[148%] tracking-[0.01em] col-span-4 ">
            В Москве и Санкт-Петербурге
          </p>
        </div>
      </section>

      <section className="w-full h-170 bg-[url('/video.webp')] bg-cover" />

      <section className="grid grid-cols-12 gap-7 max-w-360 mx-auto pt-30 px-20">
        <p className="font-medium text-base leading-[148%] tracking-[1%] col-span-4  text-(--color-gray)">
          География вкуса
        </p>
        <div className="col-span-6 flex flex-col gap-2">
          <h2 className="font-albertus font-normal text-[2.5rem] leading-[120%] tracking-[-1%] uppercase">
            стейк-хаусы Meat_Coin в Москве и Петербурге
          </h2>
          <p className="font-medium text-base leading-[148%] tracking-[1%] col-span-4 text-(--color-gray)">
            Каждый наш ресторан имеет свой характер, но все они хранят верность
            <br />
            главному принципу — дарить гостям совершенный опыт знакомства с
            мясом
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 gap-7 max-w-360 mx-auto pt-18 pb-7 px-20">
          <div className="col-span-4">
            <Tag text="Санкт-Петербург" />
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="font-medium text-base leading-[148%] tracking-[1%] w-fit flex items-end">
                Meat_Coin&nbsp;
                <span className="font-extrabold text-2xl leading-[116%]">
                  Butcher&Grill
                </span>
              </p>
              <Image src={"/arrow.svg"} alt="arrow" width={24} height={24} />
            </div>
            <p className="font-medium text-base leading-[148%] tracking-[1%] ">
              История бренда началась именно здесь, на улице Рубинштейна. Здесь
              сформировался <br /> характер Meat_Coin. Аутентичное мясное меню,
              открытая кухня и одна из первых в городе <br /> камер сухого
              вызревания
            </p>
          </div>
        </div>
        <div className="w-full h-118 bg-[url('/butcher.webp')] bg-cover" />
      </section>

      <section>
        <div className="grid grid-cols-12 gap-7 max-w-360 mx-auto pt-18 pb-7 px-20">
          <div className="col-span-4">
            <Tag text="Москва" />
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="font-medium text-base leading-[148%] tracking-[1%] w-fit flex items-end">
                Meat_Coin&nbsp;
                <span className="font-extrabold text-2xl leading-[116%]">
                  Steak&Terrace
                </span>
              </p>
              <Image src={"/arrow.svg"} alt="arrow" width={24} height={24} />
            </div>
            <p className="font-medium text-base leading-[148%] tracking-[1%] ">
              Стейк-хаус с панорамной террасой в ТЦ «Смоленский Пассаж».
              Современная <br /> интерпретация классики и авторская подача
              в ритме столицы
            </p>
          </div>
        </div>
        <div className="w-full h-118 bg-[url('/steak.webp')] bg-cover" />
      </section>

      <section>
        <div className="grid grid-cols-12 gap-7 max-w-360 mx-auto pt-18 pb-7 px-20">
          <div className="col-span-4">
            <Tag text="Комарово" />
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="font-medium text-base leading-[148%] tracking-[1%] w-fit flex items-end">
                Meat_Coin&nbsp;
                <span className="font-extrabold text-2xl leading-[116%]">
                  Country Club
                </span>
              </p>
              <Image src={"/arrow.svg"} alt="arrow" width={24} height={24} />
            </div>
            <p className="font-medium text-base leading-[148%] tracking-[1%] ">
              Загородный гриль-ресторан на берегу Финского залива. Идеальное
              место для семейного <br /> отдыха в окружении живописной природы.
              Уютный зал с камином, просторная терраса <br /> с видом на воду
              и детская комната
            </p>
          </div>
        </div>
        <div className="w-full h-118 bg-[url('/country.webp')] bg-cover" />
      </section>

      <section className="grid grid-cols-12 gap-7 max-w-360 mx-auto py-45 px-20 items-center">
        <Image src={"ornament.svg"} alt="ornament" width={260} height={66} />
        <div className="col-span-5 col-start-5 gap-30 flex flex-col">
          <div className="flex flex-col gap-7">
            <h3 className="font-extrabold text-2xl leading-[116%] tracking-normal text-(--color-accent)">
              Познать совершенный вкус <br /> авторской кухни
            </h3>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-base leading-[148%] tracking-[1%] ">
                Философия ресторанов Meat_Coin строится вокруг <br /> главной
                ценности — премиального мяса
              </p>
              <p className="font-medium text-base leading-[148%] tracking-[1%] ">
                Мы не просто готовим стейки, мы создаём культуру, <br />{" "}
                где каждый ингредиент имеет значение. Наши рестораны — <br />{" "}
                это пространство, где турецкие традиции обращения с мясом <br />{" "}
                встречаются с современной гастрономической эстетикой
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <h3 className="font-extrabold text-2xl leading-[116%] tracking-normal text-(--color-accent)">
              Познать совершенный вкус <br /> авторской кухни
            </h3>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-base leading-[148%] tracking-[1%] ">
                Философия ресторанов Meat_Coin строится вокруг <br /> главной
                ценности — премиального мяса
              </p>
              <p className="font-medium text-base leading-[148%] tracking-[1%] ">
                Мы не просто готовим стейки, мы создаём культуру, <br />{" "}
                где каждый ингредиент имеет значение. Наши рестораны — <br />{" "}
                это пространство, где турецкие традиции обращения с мясом <br />{" "}
                встречаются с современной гастрономической эстетикой
              </p>
            </div>
          </div>
        </div>
        <Image
          src={"ornament.svg"}
          alt="ornament"
          width={260}
          height={66}
          className="col-start-12"
        />
      </section>

      <section className="grid grid-cols-12 gap-7 max-w-360 mx-auto py-45 px-20">
        <p className="font-medium text-[16px] leading-[148%] tracking-[0.01em] col-span-4  text-(--color-gray)">
          Хранители традиций
        </p>
        <div className="col-span-8">
          <h2 className="font-albertus font-normal text-[2.5rem] leading-[120%] tracking-[-1%] uppercase">
            Шеф-повара Meat_Coin
          </h2>
        </div>
      </section>
    </main>
  );
}
