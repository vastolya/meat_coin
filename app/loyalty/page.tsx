import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Image from 'next/image'

export default function LoyaltyPage() {
  return (
    <>
      <div className="bg-beige">
        <GridSection className="pt-11 pb-30">
          <H1Title className="text-accent col-span-8 col-start-5">
            Программа лояльности meat_coin
          </H1Title>
          <div className="relative col-span-12 h-105 w-full rounded-lg">
            <Image src={'/loyalty_01.webp'} alt="Программа лояльности" fill sizes="auto" />
          </div>
        </GridSection>
      </div>
    </>
  )
}
