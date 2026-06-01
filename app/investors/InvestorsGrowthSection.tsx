'use client'

import { useState } from 'react'
import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import PlusIcon from '@/components/icons/PlusIcon'
import MinusIcon from '@/components/icons/MinusIcon'

const items = [
  {
    title: 'Акцент на премиальном сегменте',
    description:
      'Конкуренция в нем снизилась после ухода иностранных игроков, и платежеспособная аудитория перераспределяется на внутренний рынок',
  },
  {
    title: 'Проверенная экономика',
    description:
      'Средний срок окупаемости одного ресторана составляет 3 года, рентабельность по EBITDA достигает 38%. Каждый новый проект запускается только тогда, когда команда уверена в операционной готовности',
  },
  {
    title: 'Выбор локаций',
    description:
      'Рестораны открываются в локациях с уже сформированным спросом и целевой аудиторией — знаковые улицы Петербурга, центр Москвы, Рублёвка',
  },
  {
    title: 'Уникальная концепция',
    description:
      'Шоу-подача блюд с открытым огнём и высокий стандарт сервиса формируют узнаваемый почерк бренда в премиальном сегменте',
  },
]

export default function InvestorsGrowthSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <GridSection className="pt-30">
      <H2Title className="col-span-8 col-start-5 pb-11">Стратегия роста</H2Title>
      <div className="col-span-4 flex flex-col gap-2">
        <Paragraph>У Meat_Coin есть все для быстрого масштабирования</Paragraph>
        <Paragraph className="text-gray">
          Концепция ресторанов с доказанным спросом, команда с 15-летним опытом в HoReCa и искренняя
          любовь к своему делу, которая зажигает сердца
        </Paragraph>
      </div>
      <div className="col-span-8">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="border-border flex cursor-pointer flex-col border-b py-11"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex items-start justify-between">
                <H3Title>{item.title}</H3Title>
                <div className="relative size-6 shrink-0 pr-4 pl-7">
                  <span
                    className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <PlusIcon width={24} height={24} />
                  </span>
                  <span
                    className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <MinusIcon width={24} height={24} />
                  </span>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'mt-2 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <Paragraph className="text-gray w-9/10">{item.description}</Paragraph>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </GridSection>
  )
}
