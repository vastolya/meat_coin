import ArrowIcon from '@/components/icons/ArrowIcon'
import Button from '@/components/ui/Button'
import HeroSection from '@/components/HeroSection'
import LocationCards from '@/components/LocationCards'
import PhilosophySection from '@/components/PhilosophySection'
import ChefsSection from '@/components/ChefsSection'
import MenuSection from '@/components/MenuSection'
import BookingSection from '@/components/BookingSection'
import MarqueeSection from '@/components/MarqueeSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />

      <LocationCards />

      <PhilosophySection />

      <ChefsSection />

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 pb-30">
        <div className="col-span-3 h-full w-full rounded-lg bg-[url('/classes.webp')] bg-cover" />

        <div className="col-span-5 col-start-5">
          <h3 className="pb-2 text-2xl leading-[116%] font-extrabold tracking-normal">
            Искусство, которое можно увидеть
          </h3>
          <p className="col-span-4 pb-30 text-base leading-[148%] font-medium tracking-[1%]">
            В ресторанах Meat_Coin регулярно проходят мастер-классы по приготовлению стейков и
            гастрономические шоу, где шефы делятся секретами мастерства
          </p>
          <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
            Гости могут не только насладиться блюдами, но и прикоснуться к процессу создания
            идеального стейка, узнавая тонкости от настоящих профессионалов
          </p>
        </div>
      </section>

      <MenuSection />

      <MarqueeSection />

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20 py-30">
        <h2 className="font-albertus col-span-8 col-start-5 text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
          <span className="text-accent">Meat_Coin —&nbsp;</span> пространство для ваших мероприятий
          в Москве и Санкт-Петербурге
        </h2>
      </section>

      <section className="mx-auto grid max-w-360 grid-cols-12 gap-7 px-20">
        <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
          Мясная лавка: ваш идеальный стейк
        </p>
        <div className="col-span-5 flex flex-col gap-4">
          <h2 className="font-albertus text-[2.5rem] leading-[120%] font-normal tracking-[-1%] uppercase">
            От мясного бутика до высокой кухни
          </h2>
          <div className="flex flex-col gap-2">
            <p className="col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Концепция «мясная лавка» позволяет не только попробовать, но и купить премиальные
              отрубы с собой
            </p>
            <p className="text-gray col-span-4 text-base leading-[148%] font-medium tracking-[1%]">
              Мясная витрина всегда полна лучших образцов мраморной говядины для ресторанного опыта
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
            'Подарочный сертификат на сумму номинала — универсальный статусный подарок',
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

      <BookingSection />
    </main>
  )
}
