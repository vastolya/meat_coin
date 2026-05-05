import HeroSection from '@/components/HeroSection'
import LocationCards from '@/components/LocationCards'
import PhilosophySection from '@/components/PhilosophySection'
import ChefsSection from '@/components/ChefsSection'
import MenuSection from '@/components/MenuSection'
import BookingSection from '@/components/BookingSection'
import MarqueeSection from '@/components/MarqueeSection'
import EventsSection from '@/components/EventsSection'
import LoyaltySection from '@/components/LoyaltySection'
import ClassesSection from '@/components/ClassesSection'
import GridSection from '@/components/ui/GridSection'

export default function Home() {
  return (
    <main>
      <HeroSection />

      <LocationCards />

      <PhilosophySection />

      <ChefsSection />

      <ClassesSection />

      <MenuSection />

      <MarqueeSection />

      <EventsSection />

      <GridSection>
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
      </GridSection>

      <LoyaltySection />

      <BookingSection />
    </main>
  )
}
