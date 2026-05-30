'use client'

import AnimatedImage from '@/components/ui/AnimatedImage'
import GridSection from '@/components/ui/GridSection'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import type { ComponentType } from 'react'

export const CountryClubProfile = () => (
  <GridSection className="gap-y-6 md:grid-rows-[auto_1fr] md:gap-y-18!">
    <AnimatedImage
      src="/chef_01.webp"
      alt="Ариф Найджи"
      className="order-2 col-span-5 h-160 rounded-t-[220px] rounded-b-lg md:order-1 md:col-span-4 md:row-span-2 md:h-199 md:rounded-t-[500px]"
    >
      <Tag
        text="Комарово"
        variant="white"
        className="absolute bottom-2 left-2 px-2! py-1! md:hidden"
      />
    </AnimatedImage>

    <div className="order-1 col-span-5 mb-2 flex flex-col gap-2 md:order-2 md:col-span-8 md:mb-0">
      <H2Title>Ариф Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Country Club</H3Title>
      </div>
      <Paragraph>Бренд-шеф Meat_Coin</Paragraph>
    </div>

    <div className="order-3 col-span-5 flex flex-col gap-2 md:order-3 md:justify-between md:gap-6">
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

    <AnimatedImage
      src="/chef_01_01.webp"
      alt="Деталь приготовления блюда Арифом Найджи"
      className="order-4 col-span-5 h-75 w-full rounded-lg md:order-4 md:col-span-3 md:h-75"
    />
  </GridSection>
)

export const MoscowWorkshop = () => (
  <GridSection className="gap-y-6 md:grid-rows-[auto_1fr] md:gap-y-18!">
    <AnimatedImage
      src="/chef_02.webp"
      alt="Ариф Найджи"
      className="order-2 col-span-5 h-165.5 rounded-t-[220px] rounded-b-lg md:order-1 md:col-span-4 md:row-span-2 md:h-199 md:rounded-t-[500px]"
    />
    <div className="order-1 col-span-5 hidden flex-col gap-2 md:order-2 md:col-span-8 md:flex">
      <H2Title>Ариф Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Москва</H3Title>
      </div>
      <Paragraph>Бренд-шеф Meat_Coin</Paragraph>
    </div>
    <div className="order-3 col-span-5 flex flex-col gap-4 md:order-3 md:justify-between md:gap-6">
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
    <div className="order-4 col-span-5 gap-2 md:order-4 md:col-span-3 flex flex-col">
      <AnimatedImage
        src="/chef_02_01.webp"
        alt="Мастер-класс в ресторане Meat Coin"
        className="h-86 w-full rounded-lg md:h-75"
      />
      <AnimatedImage
        src="/chef_02_02.webp"
        alt="Подача блюда на мастер-классе Meat Coin"
        className="h-86 w-full rounded-lg md:h-75"
      />
    </div>
  </GridSection>
)

export const ButcherGrillProfile = () => (
  <GridSection className="gap-y-6 md:grid-rows-[auto_1fr] md:gap-y-18!">
    <div className="bg-gray order-2 col-span-5 h-105 rounded-t-[220px] rounded-b-lg bg-cover bg-no-repeat md:order-1 md:col-span-4 md:row-span-2 md:h-199 md:rounded-t-[500px]" />
    <div className="order-1 col-span-5 flex flex-col gap-2 md:order-2 md:col-span-8">
      <H2Title>Толга Мюрекепчи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Butcher & Grill</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="order-3 col-span-5 flex flex-col gap-4 md:order-3 md:justify-between md:gap-6">
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
    <div className="order-4 col-span-5 md:order-4 md:col-span-3">
      <AnimatedImage
        src="/chef_03_01.webp"
        alt="Гастрономическое шоу Толги Мюрекепчи"
        className="h-56 w-full rounded-lg md:h-75"
      />
    </div>
  </GridSection>
)

export const ButcherGrillWorkshop = () => (
  <GridSection className="gap-y-6 md:grid-rows-[auto_1fr] md:gap-y-18!">
    <div className="bg-gray order-2 col-span-5 h-165.5 rounded-t-[220px] rounded-b-lg bg-cover bg-no-repeat md:order-1 md:col-span-4 md:row-span-2 md:h-199 md:rounded-t-[500px]" />
    <div className="order-1 col-span-5 flex flex-col gap-2 md:order-2 md:col-span-8">
      <H2Title>Толга Мюрекепчи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Butcher & Grill</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="order-3 col-span-5 flex flex-col md:order-3 md:justify-between md:gap-6">
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
    <div className="order-4 col-span-5 gap-2 md:order-4 md:col-span-3 flex flex-col">
      <AnimatedImage
        src="/chef_03_02.webp"
        alt="Мастер-класс Толги Мюрекепчи по жарке стейков"
        className="h-86 w-full rounded-lg md:h-75"
      />
      <AnimatedImage
        src="/chef_03_03.webp"
        alt="Авторские мезе от Толги Мюрекепчи"
        className="h-86 w-full rounded-lg md:h-75"
      />
    </div>
  </GridSection>
)

export const SteakTerraceProfile = () => (
  <GridSection className="gap-y-6 md:grid-rows-[auto_1fr] md:gap-y-18!">
    <AnimatedImage
      src="/chef_05.webp"
      alt="Мехмет Найджи"
      className="order-2 col-span-5 h-165.5 rounded-t-[220px] rounded-b-lg md:order-1 md:col-span-4 md:row-span-2 md:h-199 md:rounded-t-[500px]"
    />
    <div className="order-1 col-span-5 flex flex-col gap-2 md:order-2 md:col-span-8">
      <H2Title>Мехмет Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Steak & Terrace</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>
    <div className="order-3 col-span-5 flex flex-col gap-4 md:order-3 md:justify-between md:gap-6">
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
    <div className="order-4 col-span-5 md:order-4 md:col-span-3">
      <AnimatedImage
        src="/chef_05_01.webp"
        alt="Фирменная подача Meat Coin от Мехмета Найджи"
        className="h-56 w-full rounded-lg md:h-75"
      />
    </div>
  </GridSection>
)

export const SteakTerraceWorkshop = () => (
  <GridSection className="gap-y-6 md:grid-rows-[auto_1fr] md:gap-y-18!">
    <AnimatedImage
      src="/chef_06.webp"
      alt="Мехмет Найджи"
      className="order-2 col-span-5 h-165.5 rounded-t-[220px] rounded-b-lg md:order-1 md:col-span-4 md:row-span-2 md:h-199 md:rounded-t-[500px]"
    />

    <div className="order-1 col-span-5 flex flex-col gap-2 md:order-2 md:col-span-8">
      <H2Title>Мехмет Найджи</H2Title>
      <div className="text-accent flex items-end gap-1">
        <Paragraph>Meat_Coin</Paragraph>
        <H3Title>Steak & Terrace</H3Title>
      </div>
      <Paragraph>Шеф-повар и мастер гастрономического шоу</Paragraph>
    </div>

    <div className="order-3 col-span-5 flex flex-col gap-4 md:order-3 md:justify-between md:gap-6">
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

    <div className="order-4 col-span-5 gap-2 md:order-4 md:col-span-3 flex flex-col">
      <AnimatedImage
        src="/chef_06_01.webp"
        alt="Мастер-класс Мехмета Найджи по приготовлению стейков"
        className="h-86 w-full rounded-lg md:h-75"
      />
      <AnimatedImage
        src="/chef_06_02.webp"
        alt="Стейки на мастер-классе Meat Coin"
        className="h-86 w-full rounded-lg md:h-75"
      />
    </div>
  </GridSection>
)

export const CHEF_BLOCKS: ComponentType[] = [
  CountryClubProfile,
  MoscowWorkshop,
  ButcherGrillProfile,
  ButcherGrillWorkshop,
  SteakTerraceProfile,
  SteakTerraceWorkshop,
]
