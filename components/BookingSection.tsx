'use client'

import { useEffect, useState } from 'react'
import MailIcon from '@/components/icons/MailIcon'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Telegram from '@/components/ui/Telegram'
import GridSection from './ui/GridSection'
import H2Title from './ui/H2Title'
import Paragraph from './ui/Paragraph'

const MAP_URLS = {
  msc: 'https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor',
  kmr: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae6ea5694b4a72a3a6ae86566661606e092d9645a8e9e5d9d68ec41cc4d4f7baf&source=constructor',
  spb: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac8b46d347eec8cfb176c2c54e53bc8873db449d1f71a3a283cf40d17b197b4f6&source=constructor',
}

export default function BookingSection() {
  const [activeMap, setActiveMap] = useState<string | null>(null)

  useEffect(() => {
    if (!activeMap) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveMap(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeMap])

  return (
    <>
      <GridSection className="py-30">
        <div className="col-span-5 flex flex-col gap-2 pb-7 md:col-span-8 md:col-start-5">
          <H2Title>Забронировать стол</H2Title>

          <Paragraph>
            Хотите увидеть магию приготовления идеального стейка своими глазами? Узнать секреты
            турецких мясников и попробовать блюда от лучших шефов?
          </Paragraph>
        </div>

        <div className="group col-span-5 md:col-span-12 md:grid md:grid-cols-12">
          <div className="flex flex-col justify-between py-11 md:col-span-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                Steak & Terrace
              </h3>
              <Tag text="Москва" variant="gray" />
            </div>
            <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
              Бесплатный крытый паркинг для гостей
            </p>
          </div>
          <div className="flex flex-col gap-7 py-11 md:col-span-6">
            <div className="flex flex-col">
              <p className="text-gray pb-1 text-sm leading-[148%] font-medium tracking-[1%]">
                Адрес
              </p>
              <p className="text-sm leading-[148%] font-medium tracking-[1%]">
                Смоленская площадь • 5
              </p>
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                (отдельный вход со стороны Николощеповского переулка)
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                Режим работы
              </p>
              <div className="flex gap-4">
                <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                  Ежедневно
                </p>
                <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                  12:00 - 00:00
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <Button text="Оставить заявку" />
              <div className="flex items-center gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <MailIcon width={24} height={24} color="white" />
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <Telegram width={24} height={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative my-11 cursor-pointer overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:col-span-2"
            onClick={() => setActiveMap(MAP_URLS.msc)}
          >
            <div className="h-full w-full rounded-lg bg-[url('/map_msc.webp')] bg-cover" />
          </div>
          <div className="bg-devider h-[1.5px] w-full md:col-span-12" />
        </div>

        <div className="group col-span-5 md:col-span-12 md:grid md:grid-cols-12">
          <div className="flex flex-col justify-between py-11 md:col-span-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                Country Club
              </h3>
              <Tag text="Комарово" variant="gray" />
            </div>
            <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
              Парковка 2 часа
            </p>
          </div>
          <div className="flex flex-col gap-7 py-11 md:col-span-6">
            <div className="flex flex-col">
              <p className="text-gray pb-1 text-sm leading-[148%] font-medium tracking-[1%]">
                Адрес
              </p>
              <p className="text-sm leading-[148%] font-medium tracking-[1%]">
                Ленинградская область • пос. Комарово • Приморское шоссе • 466
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                Режим работы
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                    ПН-ЧТ
                  </p>
                  <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                    12:00 - 23:00
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                    ПТ
                  </p>
                  <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                    12:00 - 01:00
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                    СБ-ВС
                  </p>
                  <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                    11:00 - 01:00
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button text="Оставить заявку" />
              <div className="flex items-center gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <MailIcon width={24} height={24} color="white" />
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <Telegram width={24} height={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative my-11 cursor-pointer overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:col-span-2"
            onClick={() => setActiveMap(MAP_URLS.kmr)}
          >
            <div className="h-full w-full rounded-lg bg-[url('/map_kmr.webp')] bg-cover" />
          </div>
          <div className="bg-devider h-[1.5px] w-full md:col-span-12" />
        </div>

        <div className="group grid grid-cols-12 md:col-span-12">
          <div className="flex flex-col justify-between py-11 md:col-span-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                Butcher&Grill
              </h3>
              <Tag text="Санкт Петербург" variant="gray" />
            </div>
            <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
              С видом на Садовое кольцо, у открытой кухни
            </p>
          </div>
          <div className="flex flex-col gap-7 py-11 md:col-span-6">
            <div className="flex flex-col">
              <p className="text-gray pb-1 text-sm leading-[148%] font-medium tracking-[1%]">
                Адрес
              </p>
              <p className="text-sm leading-[148%] font-medium tracking-[1%]">
                ул. Рубинштейна • 4
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray text-sm leading-[148%] font-medium tracking-[1%]">
                Режим работы
              </p>
              <div className="flex gap-4">
                <p className="flex flex-col justify-center text-sm leading-[148%] font-medium tracking-[1%]">
                  Ежедневно
                </p>
                <h3 className="text-2xl leading-[116%] font-extrabold tracking-normal">
                  12:00 - 00:00
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <Button text="Оставить заявку" />
              <div className="flex items-center gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <MailIcon width={24} height={24} color="white" />
                </a>
                <a href="" target="_blank" className="px-4 py-2">
                  <Telegram width={24} height={24} color="white" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative col-span-2 my-11 cursor-pointer overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={() => setActiveMap(MAP_URLS.spb)}
          >
            <div className="h-full w-full rounded-lg bg-[url('/map_spb.webp')] bg-cover" />
          </div>
          <div className="bg-devider h-[1.5px] w-full md:col-span-12" />
        </div>
      </GridSection>

      {activeMap && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md"
          onClick={() => setActiveMap(null)}
        >
          <div
            className="flex w-[55vw] flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMap(null)}
              className="cursor-pointer text-xl text-white"
              aria-label="Закрыть"
            >
              ✕
            </button>
            <div className="h-[50vh] w-full overflow-hidden rounded-xl">
              <iframe
                src={activeMap}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                title="Yandex Map"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
