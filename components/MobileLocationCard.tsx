'use client'

import Button from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'
import Tag from '@/components/ui/Tag'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import MailIcon from '@/components/icons/MailIcon'
import Telegram from '@/components/ui/Telegram'
import { type Location } from '@/consts/locations'

interface MobileLocationCardProps {
  location: Location
  isExpanded: boolean
  onToggle: () => void
  onBook: () => void
}

export default function MobileLocationCard({ location, isExpanded, onToggle, onBook }: MobileLocationCardProps) {
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
        <Button text="Забронировать" className="w-full" onClick={onBook} />
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

      {isExpanded && (
        <iframe
          src={location.mapUrl}
          width="100%"
          height="100%"
          className="h-105 rounded-sm border-0"
          allowFullScreen
          title="Yandex Map"
        />
      )}
    </Dropdown>
  )
}
