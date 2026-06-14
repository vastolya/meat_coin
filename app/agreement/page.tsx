import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'

export const metadata = { title: 'Согласие на получение рассылки — Meat_Coin' }

export default function AgreementPage() {
  return (
    <main className="bg-beige text-dark min-h-screen">
      <GridSection className="py-18">
        <H1Title className="col-span-12">Согласие на получение рассылки</H1Title>
        <Paragraph className="text-gray col-span-6">
          Страница находится в разработке. Скоро здесь появится текст согласия на получение
          рассылки.
        </Paragraph>
      </GridSection>
    </main>
  )
}
