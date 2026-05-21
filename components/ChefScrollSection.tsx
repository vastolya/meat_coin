'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'

const transition = { duration: 0.45, ease: 'easeInOut' as const }

const Chef1 = () => (
  <GridSection className="grid-rows-[auto_1fr] gap-y-18!">
    <div className="col-span-4 row-span-2 h-199 rounded-t-[500px] rounded-b-lg bg-[url('/chef_01.webp')] bg-cover bg-center bg-no-repeat" />
    <div className="col-span-8 flex flex-col gap-2">
      <H2Title>Ариф Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Country Club</H3Title>
      </div>
      <Paragraph>Бренд-шеф Meat_Coin</Paragraph>
    </div>
    <div className="col-span-5 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <Paragraph>
          Ариф Найджи — ещё один яркий представитель плеяды турецких мастеров, ученик Нусрета
        </Paragraph>
        <Paragraph>
          Его путь лежал из Турции к берегам Финского залива, где он возглавил кухню Meat Coin
          Country Club в Комарово. Здесь, в окружении вековых сосен и с видом на воду, Ариф создаёт
          гастрономию, созвучную природе: изысканную, но без излишней пафосности, тёплую, как
          домашний очаг
        </Paragraph>
      </div>
      <Paragraph>
        Для Арифа открытый огонь — это способ соединить традицию и современность. В его стейках
        чувствуется и мощь турецких корней, и лёгкость загородного отдыха
      </Paragraph>
    </div>
    <div className="col-span-3">
      <div className="h-75 w-full rounded-lg bg-[url('/chef_01_01.webp')] bg-cover bg-no-repeat" />
    </div>
  </GridSection>
)

const Chef2 = () => (
  <GridSection className="grid-rows-[auto_1fr] gap-y-18!">
    <div className="col-span-4 row-span-2 h-199 rounded-t-[500px] rounded-b-lg bg-[url('/chef_02.webp')] bg-cover bg-center bg-no-repeat" />
    <div className="col-span-8 flex flex-col gap-2">
      <H2Title>Ариф Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Москва</H3Title>
      </div>
      <Paragraph>Бренд-шеф Meat_Coin</Paragraph>
    </div>
    <div className="col-span-5 flex flex-col justify-between">
      <H3Title>Кулинарные мастер-классы в ресторанах от Кемаля</H3Title>
      <div className="flex flex-col gap-2">
        <Paragraph>
          В просторном зале с камином или на летней террасе Кемаль проводит кулинарные
          мастер-классы, которые особенно полюбились гостям Комарово
        </Paragraph>
        <Paragraph>
          Это не просто уроки готовки, а настоящие гастрономические путешествия от выбора отруба до
          подачи, от секретов сухого вызревания до идеального соуса. И, конечно, финальная
          дегустация под шёпот залива
        </Paragraph>
      </div>
    </div>
    <div className="col-span-3 flex flex-col gap-2">
      <div className="h-75 w-full rounded-lg bg-[url('/chef_02_01.webp')] bg-cover bg-no-repeat" />
      <div className="h-75 w-full rounded-lg bg-[url('/chef_02_02.webp')] bg-cover bg-no-repeat" />
    </div>
  </GridSection>
)

const Chef3 = () => (
  <GridSection className="grid-rows-[auto_1fr] gap-y-18!">
    <div className="bg-gray col-span-4 row-span-2 h-199 rounded-t-[500px] rounded-b-lg bg-cover bg-no-repeat" />
    <div className="col-span-8 flex flex-col gap-2">
      <H2Title>Толга Мюрекепчи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Butcher & Grill</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="col-span-5 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <Paragraph>
          Толга Мюрекепчи родился в Турции — стране с богатыми мясными традициями
        </Paragraph>
        <Paragraph>
          С детства увлёкшись кулинарией, он стал новаторским шефом, работал в лучших ресторанах
          Стамбула, а затем и на Ближнем Востоке, в Кувейте, Катаре, Омане и Дубае. Именно Толга
          привёз в Россию уникальные шоу с ножами и открытым огнём, превратив приготовление стейка
          в захватывающий перформанс
        </Paragraph>
      </div>
      <Paragraph>
        Сегодня Толга — ведущий шеф-повар Meat_Coin, который объединяет культуру мяса, открытые
        кухни и современные концепции, чтобы каждый ужин запоминался надолго
      </Paragraph>
    </div>
    <div className="col-span-3">
      <div className="h-75 w-full rounded-lg bg-[url('/chef_03_01.webp')] bg-cover bg-no-repeat" />
    </div>
  </GridSection>
)

const Chef4 = () => (
  <GridSection className="grid-rows-[auto_1fr] gap-y-18!">
    <div className="bg-gray col-span-4 row-span-2 h-199 rounded-t-[500px] rounded-b-lg bg-cover bg-no-repeat" />
    <div className="col-span-8 flex flex-col gap-2">
      <H2Title>Толга Мюрекепчи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Butcher & Grill</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="col-span-5 flex flex-col justify-between">
      <H3Title>Мастер-класс по жарке стейков и авторские мезе</H3Title>
      <div className="flex flex-col gap-2">
        <Paragraph>
          В пространстве петербургского ресторана Толга проводит мастер-классы по жарке стейков,
          где делится не только техниками работы с мраморной говядиной, но и секретами приготовления
          авторских турецких мезе
        </Paragraph>
        <Paragraph>
          Гости узнают, какие специи подчёркивают вкус мяса, а какие остаются за кулисами, и,
          конечно, дегустируют результаты своего обучения
        </Paragraph>
      </div>
    </div>
    <div className="col-span-3 flex flex-col gap-2">
      <div className="h-75 w-full rounded-lg bg-[url('/chef_03_02.webp')] bg-cover bg-no-repeat" />
      <div className="h-75 w-full rounded-lg bg-[url('/chef_03_03.webp')] bg-cover bg-no-repeat" />
    </div>
  </GridSection>
)

const Chef5 = () => (
  <GridSection className="grid-rows-[auto_1fr] gap-y-18!">
    <div className="col-span-4 row-span-2 h-199 rounded-t-[500px] rounded-b-lg bg-[url('/chef_05.webp')] bg-cover bg-no-repeat" />
    <div className="col-span-8 flex flex-col gap-2">
      <H2Title>Мехмет Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Steak & Terrace</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="col-span-5 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <Paragraph>
          Мехмет Чалышкан родился в Адыямане — регионе, славящемся своими мясными традициями
        </Paragraph>
        <Paragraph>
          С детства впитывая знания старших, он стал одним из ярких учеников Нусрета Гекче, а позже
          привёз своё искусство в Россию. Именно Мехмет в 2017 году на улице Рубинштейна заложил
          основы Meat_Coin, придумав уникальные блюда и ту самую подачу, которая сегодня стала
          визитной карточкой бренда
        </Paragraph>
      </div>
      <Paragraph>
        Сегодня Мехмет — концепт-шеф московского ресторана Meat_Coin Steak&Terrace
      </Paragraph>
    </div>
    <div className="col-span-3">
      <div className="h-75 w-full rounded-lg bg-[url('/chef_05_01.webp')] bg-cover bg-no-repeat" />
    </div>
  </GridSection>
)

const Chef6 = () => (
  <GridSection className="grid-rows-[auto_1fr] gap-y-18!">
    <div className="col-span-4 row-span-2 h-199 rounded-t-[500px] rounded-b-lg bg-[url('/chef_06.webp')] bg-cover bg-no-repeat" />
    <div className="col-span-8 flex flex-col gap-2">
      <H2Title>Мехмет Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Steak & Terrace</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="col-span-5 flex flex-col justify-between">
      <H3Title>Мастер-класс по приготовлению стейков от Мехмета</H3Title>
      <div className="flex flex-col gap-2">
        <Paragraph>
          Для ценителей Мехмет регулярно проводит закрытые мастер-классы по приготовлению стейков
        </Paragraph>
        <Paragraph>
          Гости не только наблюдают за виртуозной работой с мясом, но и узнают секреты выбора
          отрубов, тонкости сухого вызревания и магию идеальной прожарки. Это редкая возможность
          прикоснуться к мастерству турецкого мясника и задать вопросы самому шефу
        </Paragraph>
      </div>
    </div>
    <div className="col-span-3 flex flex-col gap-2">
      <div className="h-75 w-full rounded-lg bg-[url('/chef_06_01.webp')] bg-cover bg-no-repeat" />
      <div className="h-75 w-full rounded-lg bg-[url('/chef_06_02.webp')] bg-cover bg-no-repeat" />
    </div>
  </GridSection>
)

const BLOCKS = [Chef1, Chef2, Chef3, Chef4, Chef5, Chef6]

// Направления для каждого перехода (индекс = блок, в который входим)
const TRANSITIONS: Array<{
  enter: { x?: number; y?: number }
  exit: { x?: number; y?: number }
} | null> = [
  null,
  { enter: { x: 120 }, exit: { x: -120 } }, // 0→1: входит слева
  { enter: { y: 60 }, exit: { y: -60 } }, // 1→2: входит снизу
  { enter: { x: 120 }, exit: { x: -120 } }, // 2→3: входит слева
  { enter: { y: 60 }, exit: { y: -60 } }, // 3→4: входит снизу
  { enter: { x: 120 }, exit: { x: -120 } }, // 4→5: входит слева
]

type AnimState = { x?: number; y?: number; opacity: number; filter: string }

const VISIBLE: AnimState = { x: 0, y: 0, opacity: 1, filter: 'blur(0px)' }

function getAnims(current: number, next: number): { entry: AnimState; exit: AnimState } {
  const forward = next > current
  const t = TRANSITIONS[forward ? next : current]

  if (!t) {
    return {
      entry: { y: 60, opacity: 0, filter: 'blur(6px)' },
      exit: { y: -60, opacity: 0, filter: 'blur(6px)' },
    }
  }

  // Прямо: вход в одну сторону, выход в другую
  // Назад: направления зеркалятся
  return forward
    ? {
        entry: { ...t.enter, opacity: 0, filter: 'blur(6px)' },
        exit: { ...t.exit, opacity: 0, filter: 'blur(6px)' },
      }
    : {
        entry: { ...t.exit, opacity: 0, filter: 'blur(6px)' },
        exit: { ...t.enter, opacity: 0, filter: 'blur(6px)' },
      }
}

const ChefScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [entryAnim, setEntryAnim] = useState<AnimState>(VISIBLE)
  const [exitAnim, setExitAnim] = useState<AnimState>({ y: -60, opacity: 0, filter: 'blur(6px)' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(Math.floor(v * BLOCKS.length), BLOCKS.length - 1)
    if (next !== activeIndex) {
      const { entry, exit } = getAnims(activeIndex, next)
      setEntryAnim(entry)
      setExitAnim(exit)
      setPrevIndex(activeIndex)
      setActiveIndex(next)
    }
  })

  const ActiveBlock = BLOCKS[activeIndex]
  const PrevBlock = prevIndex !== null ? BLOCKS[prevIndex] : null

  return (
    <div ref={containerRef} className="h-[250vh]">
      <div className="bg-beige sticky top-0 flex h-screen items-center">
        <div className="relative w-full">
          {/* Плейсхолдер для стабильной высоты — всегда самый высокий блок (h-199) */}
          <div className="pointer-events-none invisible" aria-hidden>
            <Chef2 />
          </div>

          {/* Уходящий блок */}
          {PrevBlock && (
            <motion.div
              key={`prev-${prevIndex}-${activeIndex}`}
              initial={VISIBLE}
              animate={exitAnim}
              transition={transition}
              className="absolute top-0 right-0 left-0"
            >
              <PrevBlock />
            </motion.div>
          )}

          {/* Входящий блок — key меняется при смене activeIndex, форсируя remount с нужным initial */}
          <motion.div
            key={`active-${activeIndex}`}
            initial={entryAnim}
            animate={VISIBLE}
            transition={transition}
            className="absolute top-0 right-0 left-0"
          >
            <ActiveBlock />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ChefScrollSection
