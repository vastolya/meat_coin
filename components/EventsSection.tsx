import Link from 'next/link'
import Tag from './ui/Tag'
import Button from './ui/Button'
import GridSection from './ui/GridSection'
import H2Title from './ui/H2Title'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'

export default function EventsSection() {
  return (
    <GridSection className="py-30">
      <H2Title className="col-span-5 md:col-span-8 md:col-start-5">
        <span className="text-accent">Meat_Coin —&nbsp;</span> пространство для ваших мероприятий в
        Москве и Санкт-Петербурге
      </H2Title>

      <>
        <div className="col-span-5 h-75 rounded-lg bg-[url('/event_01.webp')] bg-cover md:col-span-3" />

        <div className="col-span-5 flex flex-col gap-4 md:col-span-8 md:col-start-5">
          <H3Title>
            Рестораны Meat_Coin идеальны <br /> для проведения
          </H3Title>

          <div className="flex gap-2">
            <Tag text="Свадьба" /> <Tag text="Юбилей" /> <Tag text="Корпоратив" />
            <Tag text="Деловой ужин" />
          </div>
        </div>
      </>

      <>
        <div className="col-span-5 h-119 rounded-lg bg-[url('/event_02.webp')] bg-cover md:col-span-4 md:col-start-1" />
        <div className="col-span-5 flex flex-col gap-4 md:col-start-5">
          <H3Title>
            Панорамная терраса в Москве, вип-зал, летняя терраса и беседки в Комарово, атмосфера
            первого ресторана на Рубинштейна
          </H3Title>
          <Paragraph>Каждая локация создаёт уникальный фон для вашего торжества</Paragraph>
        </div>
      </>

      <>
        <div className="col-span-5 h-174 rounded-lg bg-[url('/event_03.webp')] bg-cover md:col-span-4 md:col-start-1" />
        <div className="col-span-5 flex flex-col gap-4 md:col-span-8 md:col-start-5">
          <div className="h-119 rounded-lg bg-[url('/event_04.webp')] bg-cover" />
          <H3Title>Наша команда поможет организовать событие любого уровня сложности</H3Title>
          <div className="flex gap-2">
            <Tag text="Камерный ужин" /> <Tag text="Масштабный гала-вечер" />
          </div>
        </div>
      </>

      <div className="col-span-5 h-119 rounded-lg bg-[url('/event_05.webp')] bg-cover md:col-span-4 md:col-start-1" />

      <>
        <div className="col-span-5 h-86 rounded-lg bg-[url('/event_06.webp')] bg-cover md:col-span-4 md:col-start-1" />
        <div className="col-span-5 flex flex-col justify-end gap-4 md:col-span-8 md:col-start-5">
          <Paragraph className="text-gray">
            Мы предлагаем персональное меню, разработанное шеф-поварами, <br /> помощь в подборе
            вин и полное сопровождение
          </Paragraph>
          <div className="flex items-center justify-between">
            <Link href={'/'} className="hover:text-accent transition-all duration-300">
              <Paragraph>Подробнее о событиях</Paragraph>
            </Link>
            <div className="flex flex-col gap-2 md:flex-row">
              <Button text="Комарово" variant="secondary" />
              <Button text="Москва" variant="secondary" />
              <Button text="Санкт-Петербург" variant="secondary" />
            </div>
          </div>
        </div>
      </>
    </GridSection>
  )
}
