'use client'

import LocationIcon from '@/components/icons/LocationIcon'
import MailIcon from '@/components/icons/MailIcon'
import Button from '@/components/ui/Button'
import GridSection from '@/components/ui/GridSection'
import H1Title from '@/components/ui/H1Title'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import Tag from '@/components/ui/Tag'
import Telegram from '@/components/ui/Telegram'
import { LOCATIONS } from '@/consts/locations'
import { useState } from 'react'

export default function ContactsPage() {
  const [expanded, setExpanded] = useState(LOCATIONS[0].name)

  return (
    <main className="bg-beige text-dark">
      <GridSection className="gap-y-0! pt-11 pb-30">
        <div className="col-span-5 flex flex-col gap-2 pb-18 md:col-span-12">
          <H1Title>Контакты</H1Title>
          <Paragraph className="text-gray">Наших ресторанов</Paragraph>
        </div>

        <div className="col-span-5 md:col-span-6">
          {LOCATIONS.map((location) => {
            const isOpen = expanded === location.name
            return (
              <div key={location.name} className="relative">
                {isOpen && (
                  <div className="bg-border absolute top-0 -left-4 h-full w-0.5 rounded-sm" />
                )}

                <button
                  type="button"
                  onClick={() => setExpanded(location.name)}
                  className={`w-full pt-11 pb-0 text-left ${!isOpen ? 'group cursor-pointer' : ''}`}
                >
                  <div className={`flex justify-between ${isOpen ? 'pb-11' : 'pb-4'}`}>
                    <div className="flex flex-col gap-2">
                      <H3Title className="group-hover:text-accent transition-colors duration-200">
                        {location.name}
                      </H3Title>
                      <Tag text={location.city} variant="white" />
                    </div>
                    {isOpen && (
                      <Paragraph className="text-border text-end">{location.note}</Paragraph>
                    )}
                  </div>
                  {!isOpen && (
                    <Paragraph className="text-accent pb-11">{location.address}</Paragraph>
                  )}
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex flex-col gap-7 pb-11">
                      <div className="flex gap-2">
                        <LocationIcon color="var(--color-accent)" width={24} height={24} />
                        <Paragraph>{location.address}</Paragraph>
                      </div>

                      <div className="text-accent flex items-center gap-4">
                        <div className="flex flex-col gap-3">
                          {location.schedule.map(({ label }) => (
                            <Paragraph key={label}>{label}</Paragraph>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2">
                          {location.schedule.map(({ label, time }) => (
                            <H3Title key={label}>{time}</H3Title>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button text="Оставить заявку" />
                        <div className="flex items-center gap-4">
                          <a href={location.phone} className="text-accent">
                            {location.phoneLabel}
                          </a>
                          <a href="" target="_blank" className="px-4 py-2">
                            <MailIcon width={24} height={24} color="var(--color-accent)" />
                          </a>
                          <a href={location.telegram} target="_blank" className="px-4 py-2">
                            <Telegram width={24} height={24} color="var(--color-accent)" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="col-span-5 md:col-span-6">
          <div className="relative h-[58vh] w-full overflow-hidden rounded-xl">
            {LOCATIONS.map((location) => (
              <div
                key={location.name}
                className={`absolute inset-0 grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 ${
                  expanded === location.name ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  title={location.name}
                />
              </div>
            ))}
          </div>
        </div>
      </GridSection>
    </main>
  )
}
