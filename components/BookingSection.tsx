'use client'

import MailIcon from '@/components/icons/MailIcon'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Telegram from '@/components/ui/Telegram'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import GridSection from './ui/GridSection'
import H2Title from './ui/H2Title'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'

const CONTACT_LINKS = [
  { href: '', icon: MailIcon, label: 'Email' },
  { href: '', icon: Telegram, label: 'Telegram' },
] as const

interface LocationAddress {
  text: string
  className: string
}

interface LocationSchedule {
  label: string
  time: string
}

interface Location {
  name: string
  city: string
  note: string
  address: LocationAddress[]
  schedule: LocationSchedule[]
  mapUrl: string
  mapPreview: string
  wrapperClassName: string
  mapClassName: string
}

const LOCATIONS: Location[] = [
  {
    name: 'Steak & Terrace',
    city: 'Москва',
    note: 'Бесплатный крытый паркинг для гостей',
    address: [
      { text: 'Смоленская площадь • 5', className: 'text-sm' },
      {
        text: '(отдельный вход со стороны Николощеповского переулка)',
        className: 'text-gray text-sm',
      },
    ],
    schedule: [{ label: 'Ежедневно', time: '12:00 - 00:00' }],
    mapUrl:
      'https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor',
    mapPreview: '/map_msc.webp',
    wrapperClassName: 'col-span-5 md:col-span-12 md:grid md:grid-cols-12',
    mapClassName: 'md:col-span-2',
  },
  {
    name: 'Country Club',
    city: 'Комарово',
    note: 'Парковка 2 часа',
    address: [
      {
        text: 'Ленинградская область • пос. Комарово • Приморское шоссе • 466',
        className: 'text-sm',
      },
    ],
    schedule: [
      { label: 'ПН-ЧТ', time: '12:00 - 23:00' },
      { label: 'ПТ', time: '12:00 - 01:00' },
      { label: 'СБ-ВС', time: '11:00 - 01:00' },
    ],
    mapUrl:
      'https://yandex.ru/map-widget/v1/?um=constructor%3Ae6ea5694b4a72a3a6ae86566661606e092d9645a8e9e5d9d68ec41cc4d4f7baf&source=constructor',
    mapPreview: '/map_kmr.webp',
    wrapperClassName: 'col-span-5 md:col-span-12 md:grid md:grid-cols-12',
    mapClassName: 'md:col-span-2',
  },
  {
    name: 'Butcher&Grill',
    city: 'Санкт Петербург',
    note: 'С видом на Садовое кольцо, у открытой кухни',
    address: [{ text: 'ул. Рубинштейна • 4', className: 'text-sm' }],
    schedule: [{ label: 'Ежедневно', time: '12:00 - 00:00' }],
    mapUrl:
      'https://yandex.ru/map-widget/v1/?um=constructor%3Ac8b46d347eec8cfb176c2c54e53bc8873db449d1f71a3a283cf40d17b197b4f6&source=constructor',
    mapPreview: '/map_spb.webp',
    wrapperClassName: 'grid grid-cols-12 md:col-span-12',
    mapClassName: 'col-span-2',
  },
]

interface MobileLocationCardProps {
  location: Location
  isExpanded: boolean
  onToggle: () => void
  onMapOpen: () => void
}

interface DesktopLocationCardProps {
  location: Location
  onMapOpen: () => void
}

function MobileLocationCard({
  location,
  isExpanded,
  onToggle,
  onMapOpen,
}: MobileLocationCardProps) {
  return (
    <div className="border-devider border-t first:border-t-0 last:border-b">
      <button
        type="button"
        className={`flex w-full items-center justify-between gap-4 pt-7 text-left transition-[padding] duration-300 ease-out ${
          isExpanded ? 'pb-2' : 'pb-7'
        }`}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className="flex flex-col gap-2">
          <H3Title className="text-[2rem] leading-[104%] font-extrabold tracking-normal">
            {location.name}
          </H3Title>
          <Tag className="px-2! py-1!" text={location.city} variant="gray" />
        </div>
        <span
          className={`text-accent inline-flex h-6 w-6 origin-center items-center justify-center transition-transform duration-300 ease-out ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          <Image src="/dropdown.svg" alt="Dropdown" width={24} height={24} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-1000 ease-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-6 md:gap-8 pb-8">
            <Paragraph className="text-gray">{location.note}</Paragraph>

            <div className="flex flex-col gap-2">
              <Paragraph className="text-gray">Адрес</Paragraph>
              {location.address.map(({ text, className }) => (
                <Paragraph key={text} className={className}>
                  {text}
                </Paragraph>
              ))}
            </div>

            <div className="flex flex-col gap-2 md:gap-1">
              <Paragraph className="text-gray">Режим работы</Paragraph>
              <div className="flex flex-col gap-2">
                {location.schedule.map(({ label, time }) => (
                  <div key={label} className="grid grid-cols-[6.5rem_1fr] items-center gap-4">
                    <Paragraph>{label}</Paragraph>
                    <H3Title className="text-2xl leading-[116%] font-extrabold tracking-normal tabular-nums">
                      {time}
                    </H3Title>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <Button text="Оставить заявку" className="w-full" />
              <div className="flex items-center justify-between gap-4">
                <a href="tel:84992831911" className="text-accent">
                  +7 (499) 283-19-11
                </a>
                {CONTACT_LINKS.map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" className="py-2">
                    <Icon width={24} height={24} color="white" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="aspect-square cursor-pointer overflow-hidden rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url('${location.mapPreview}')` }}
              onClick={onMapOpen}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopLocationCard({ location, onMapOpen }: DesktopLocationCardProps) {
  return (
    <div className={`group ${location.wrapperClassName}`}>
      <div className="flex flex-col justify-between py-7 md:col-span-4 md:py-11">
        <div className="flex flex-col gap-2">
          <H3Title className="text-2xl leading-[116%] font-extrabold tracking-normal">
            {location.name}
          </H3Title>
          <Tag text={location.city} variant="gray" />
        </div>
        <Paragraph className="text-gray text-sm">{location.note}</Paragraph>
      </div>

      <div className="flex flex-col gap-7 py-11 md:col-span-6">
        <div className="flex flex-col">
          <Paragraph className="text-gray pb-1 text-sm">Адрес</Paragraph>
          {location.address.map(({ text, className }) => (
            <Paragraph key={text} className={className}>
              {text}
            </Paragraph>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <Paragraph className="text-gray text-sm">Режим работы</Paragraph>
          <div className="flex flex-col gap-2">
            {location.schedule.map(({ label, time }) => (
              <div key={label} className="grid grid-cols-[6.5rem_1fr] items-center gap-4">
                <Paragraph className="text-sm">{label}</Paragraph>
                <H3Title className="text-2xl leading-[116%] font-extrabold tracking-normal tabular-nums">
                  {time}
                </H3Title>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button text="Оставить заявку" />
          <div className="flex items-center gap-4">
            <a href="tel:84992831911" className="text-accent">
              +7 (499) 283-19-11
            </a>
            {CONTACT_LINKS.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" className="px-4 py-2">
                <Icon width={24} height={24} color="white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`relative my-11 cursor-pointer overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${location.mapClassName}`}
        onClick={onMapOpen}
      >
        <div
          className="h-full w-full rounded-lg bg-cover"
          style={{ backgroundImage: `url('${location.mapPreview}')` }}
        />
      </div>

      <div className="bg-devider h-[1.5px] w-full md:col-span-12" />
    </div>
  )
}

export default function BookingSection() {
  const [activeMap, setActiveMap] = useState<string | null>(null)
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null)

  useEffect(() => {
    if (!activeMap) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveMap(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeMap])

  return (
    <>
      <GridSection className="md:py-30">
        <div className="col-span-5 mb-9 flex flex-col gap-2 md:col-span-8 md:col-start-5 md:mb-0">
          <H2Title>Забронировать стол</H2Title>

          <Paragraph>
            Хотите увидеть магию приготовления идеального стейка своими глазами? Узнать секреты
            турецких мясников и попробовать блюда от лучших шефов?
          </Paragraph>
        </div>

        <div className="col-span-5 md:hidden">
          {LOCATIONS.map((location) => (
            <MobileLocationCard
              key={location.name}
              location={location}
              isExpanded={expandedLocation === location.name}
              onToggle={() =>
                setExpandedLocation((current) => (current === location.name ? null : location.name))
              }
              onMapOpen={() => setActiveMap(location.mapUrl)}
            />
          ))}
        </div>

        <div className="hidden md:contents">
          {LOCATIONS.map((location) => (
            <DesktopLocationCard
              key={location.name}
              location={location}
              onMapOpen={() => setActiveMap(location.mapUrl)}
            />
          ))}
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
