import HeroSection from '@/components/HeroSection'
import LocationCards from '@/components/LocationCards'
import PhilosophySection from '@/components/PhilosophySection'
import ChefsSection from '@/components/ChefsSection'
import MenuSection from '@/components/MenuSection'
import BookingSection from '@/components/BookingSection'
import MarqueeSection from '@/components/MarqueeSection'
import EventsSection from '@/components/EventsSection'
import LoyaltySection from '@/components/LoyaltySection'

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

      <EventsSection />

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

      <LoyaltySection />

      <BookingSection />
    </main>
  )
}
