'use client'

import MailIcon from '@/components/icons/MailIcon'
import Button from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'
import Tag from '@/components/ui/Tag'
import Telegram from '@/components/ui/Telegram'
import { useEffect, useState } from 'react'
import GridSection from './ui/GridSection'
import H2Title from './ui/H2Title'
import H3Title from './ui/H3Title'
import Paragraph from './ui/Paragraph'

import { LOCATIONS, type Location } from '@/consts/locations'

const LAYOUT: Record<string, { wrapperClassName: string; mapClassName: string }> = {
  'Steak & Terrace': {
    wrapperClassName: 'col-span-5 md:col-span-12 md:grid md:grid-cols-12',
    mapClassName: 'md:col-span-2',
  },
  'Country Club': {
    wrapperClassName: 'col-span-5 md:col-span-12 md:grid md:grid-cols-12',
    mapClassName: 'md:col-span-2',
  },
  'Butcher&Grill': {
    wrapperClassName: 'grid grid-cols-12 md:col-span-12',
    mapClassName: 'col-span-2',
  },
}

interface MobileLocationCardProps {
  location: Location
  isExpanded: boolean
  onToggle: () => void
}

interface DesktopLocationCardProps {
  location: Location
  onMapOpen: () => void
}

function MobileLocationCard({ location, isExpanded, onToggle }: MobileLocationCardProps) {
  return (
    <Dropdown
      isOpen={isExpanded}
      onToggle={onToggle}
      className="border-devider border-t first:border-t-0 last:border-b"
      buttonClassName={`flex w-full items-center justify-between gap-4 pt-7 text-left transition-[padding] duration-300 ease-out ${
        isExpanded ? 'pb-2' : 'pb-7'
      }`}
      contentClassName="flex flex-col gap-6 pb-8 md:gap-8"
      trigger={
        <div className="flex flex-col gap-2">
          <H3Title className="text-[2rem] leading-[104%] font-extrabold tracking-normal">
            {location.name}
          </H3Title>
          <Tag className="px-2! py-1!" text={location.city} variant="gray" />
        </div>
      }
    >
      <Paragraph className="text-gray">{location.note}</Paragraph>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-gray">Адрес</Paragraph>
        <Paragraph className="text-sm">{location.address}</Paragraph>
        {location.addressNote && (
          <Paragraph className="text-gray text-sm">{location.addressNote}</Paragraph>
        )}
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
        <Button text="Забронировать" className="w-full" />
        <div className="flex items-center justify-between gap-4">
          <a href={location.phone} className="text-accent">
            {location.phoneLabel}
          </a>
          <a href="" target="_blank" className="py-2">
            <MailIcon width={24} height={24} color="white" />
          </a>
          <a href={location.telegram} target="_blank" className="py-2">
            <Telegram width={24} height={24} color="white" />
          </a>
        </div>
      </div>

      <iframe
        src={location.mapUrl}
        width="100%"
        height="100%"
        className="h-105 rounded-sm border-0"
        allowFullScreen
        title="Yandex Map"
      />
    </Dropdown>
  )
}

function DesktopLocationCard({ location, onMapOpen }: DesktopLocationCardProps) {
  const { wrapperClassName, mapClassName } = LAYOUT[location.name]
  return (
    <div className={`group ${wrapperClassName}`}>
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
          <Paragraph className="text-sm">{location.address}</Paragraph>
          {location.addressNote && (
            <Paragraph className="text-gray text-sm">{location.addressNote}</Paragraph>
          )}
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
          <Button text="Забронировать" />
          <div className="flex items-center gap-4">
            <a href={location.phone} className="text-accent">
              {location.phoneLabel}
            </a>
            <a href="" target="_blank" className="px-4 py-2">
              <MailIcon width={24} height={24} color="white" />
            </a>
            <a href={location.telegram} target="_blank" className="px-4 py-2">
              <Telegram width={24} height={24} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`relative my-11 cursor-pointer overflow-hidden rounded-lg transition-opacity duration-300 ${mapClassName}`}
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
