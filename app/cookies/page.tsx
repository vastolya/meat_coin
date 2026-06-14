import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import Paragraph from '@/components/ui/Paragraph'

export const metadata = { title: 'Настройки cookies — Meat_Coin' }

export default function CookiesPage() {
  return (
    <main className="bg-beige text-dark min-h-screen">
      <GridSection className="py-18">
        <H1Title className="col-span-12">Настройки cookies</H1Title>
        <Paragraph className="text-gray col-span-6">
          Страница находится в разработке. Скоро здесь появятся настройки файлов cookies.
        </Paragraph>
      </GridSection>
    </main>
  )
}
