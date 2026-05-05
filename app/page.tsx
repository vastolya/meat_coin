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
import ButcherSection from '@/components/ButcherSection'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />

      <LocationCards />

      {/* <div className="hidden md:flex"> */}
      <PhilosophySection />
      {/* </div> */}

      <ChefsSection />

      <ClassesSection />

      <MenuSection />

      <MarqueeSection />

      <EventsSection />

      <ButcherSection />

      <LoyaltySection />

      <BookingSection />
    </main>
  )
}
