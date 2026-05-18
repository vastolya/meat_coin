import BookingSection from '@/components/BookingSection'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H2Title from '@/components/ui/H2Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import React from 'react'

const About = () => {
  return (
    <div className="bg-beige">
      <GridSection className="pt-11">
        <div className="text-gray col-span-4 flex flex-col justify-between">
          <Paragraph>
            Три ресторана, каждый со своим характером, объединены общей философией
          </Paragraph>
          <Paragraph>Познать идеальный вкус мяса и подарить этот опыт своим гостям</Paragraph>
        </div>

        <div className="col-span-8 flex flex-col gap-2">
          <H1Title className="text-accent">
            Meat_Coin от первого ресторана на Рубинштейна{' '}
            <span className="text-dark"> до сети стейк-хаусов </span>
          </H1Title>
          <div className="flex gap-2">
            <Tag text="Санкт-Петербург" variant="white" /> <Tag text="Москва" variant="white" />{' '}
            <Tag text="Комарово" variant="white" />
          </div>
        </div>

        <div className='col-span-12 h-105 rounded-lg bg-[url("/about.webp")] bg-cover' />
      </GridSection>

      <GridSection className="py-30">
        <div className="group col-span-4 flex cursor-pointer flex-col gap-4">
          <H3Title className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out">
            Аутентичный в сердце Санкт-Петербурга
          </H3Title>
          <div className='flex h-102 items-center justify-center rounded-lg bg-[url("/about_02.webp")] bg-cover'>
            <p className="w-fit rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
              Санкт-Петербург
            </p>
          </div>
        </div>

        <div className="group col-span-4 flex cursor-pointer flex-col gap-4">
          <div className='flex h-102 items-center justify-center rounded-lg bg-[url("/about_03.webp")] bg-cover'>
            <p className="w-fit rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
              Москва
            </p>
          </div>
          <H3Title className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out">
            Ресторан с панорамным видом на Садовое кольцо
          </H3Title>
        </div>

        <div className="group col-span-4 flex cursor-pointer flex-col gap-4">
          <H3Title className="text-dark group-hover:text-accent transition-all duration-300 ease-in-out">
            Флагманский загородный ресторан на берегу Финского залива
          </H3Title>
          <div className='flex h-95 items-center justify-center rounded-lg bg-[url("/about_04.webp")] bg-cover'>
            <p className="w-fit rounded-sm bg-white/10 p-3 text-xl leading-[116%] font-extrabold tracking-[0%] text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100">
              Комарово
            </p>
          </div>
        </div>
      </GridSection>

      <div className="bg-dark">
        <GridSection className="py-30">
          <Paragraph className="text-gray col-span-4" delay={0.2}>
            Философия и стандарты качества
          </Paragraph>

          <div className="col-span-8">
            <H2Title className="pb-18" delay={0.4}>
              <span className="text-accent">Meat_Coin сегодня</span> сеть <br /> ресторанов с
              авторской кухней
            </H2Title>

            <H3Title className="pb-2" delay={0.6}>
              В нашем меню соседствуют простота <br /> и изысканность
            </H3Title>
            <Paragraph delay={0.8}>
              От стейков в чистом виде, позволяющих ощутить подлинный <br /> вкус мраморной
              говядины, до сложных, многослойных <br /> сочетаний, рожденных фантазией шефов
            </Paragraph>
          </div>

          <div className='col-span-12 h-105 rounded-lg bg-[url("/about_05.webp")] bg-cover' />

          <div className="col-span-5 col-start-5">
            <H3Title className="pb-4" delay={1}>
              Три локации — одна история
            </H3Title>
            <Paragraph className="pb-2" delay={1.2}>
              Каждый из трёх ресторанов живёт своей жизнью, но все они — главы одной книги. Книги
              о страсти, преданности делу и бесконечном поиске совершенства
            </Paragraph>
            <Paragraph delay={1.4}>
              Путь от первого ресторана на Рубинштейна до загородного клуба в Комарово — это история
              роста, дерзости и любви к своему делу
            </Paragraph>
          </div>
        </GridSection>
      </div>

      <div className="bg-dark">
        <BookingSection />
      </div>
    </div>
  )
}

export default About
