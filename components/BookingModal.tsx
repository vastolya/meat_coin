'use client'

import { useState } from 'react'
import SlideModal from '@/components/ui/SlideModal'
import Button from '@/components/ui/Button'
import FormInput from '@/components/ui/FormInput'
import Checkbox from '@/components/ui/Checkbox'
import MinusIcon from '@/components/icons/MinusIcon'
import PlusIcon from '@/components/icons/PlusIcon'
import Dropdown from '@/components/ui/Dropdown'
import { type Location, LOCATIONS } from '@/consts/locations'
import Image from 'next/image'
import H2Title from './ui/H2Title'
import Paragraph from './ui/Paragraph'
import H3Title from './ui/H3Title'
import DateTimePicker from './DateTimePicker'
import CalendarIcon from './icons/CalendarIcon'

const MIN_GUESTS = 1
const MAX_GUESTS = 12

interface BookingModalProps {
  location: Location | null
  onClose: () => void
}

function StepperBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className="bg-gray hover:bg-accent h-fit cursor-pointer rounded-full text-white transition-all duration-300"
      aria-label={label}
    >
      {children}
    </button>
  )
}

export default function BookingModal({ location, onClose }: BookingModalProps) {
  const [guests, setGuests] = useState(2)
  const [selectedLocation, setSelectedLocation] = useState(location?.name ?? '')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)

  const isValid = name.trim().length > 0 && phone.replace(/\D/g, '').length >= 10 && consent

  const activeLocation = LOCATIONS.find((l) => l.name === selectedLocation) ?? location

  return (
    <SlideModal
      isOpen={!!location}
      onClose={onClose}
      className="w-155!"
      headerLeft={<Image src="/logo_dark.svg" alt="meat_coin" width={120} height={34} />}
    >
      {location && (
        <div className="text-dark flex flex-col gap-18 pt-2">
          <div className="flex flex-col gap-2">
            <H2Title delay={0.2}>Забронировать стол</H2Title>
            <Paragraph delay={0.4}>
              Резерв стола происходит по телефону &nbsp;
              <a href={activeLocation?.phone} className="text-accent underline">
                {activeLocation?.phoneLabel}
              </a>
            </Paragraph>
            <Paragraph delay={0.6}>
              Или заполните форму и наш менеджер свяжется с вами в ближайшее время
            </Paragraph>
          </div>

          {isDatePickerOpen ? (
            <DateTimePicker
              onConfirm={(date) => {
                setSelectedDate(date)
                setIsDatePickerOpen(false)
              }}
            />
          ) : (
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <H3Title delay={0.8}>Локация бронирования</H3Title>
                <div className="border-border rounded-lg border p-3">
                  <Dropdown
                    isOpen={isDropdownOpen}
                    onToggle={() => setIsDropdownOpen((v) => !v)}
                    iconColor="var(--color-border)"
                    buttonClassName="flex w-full items-center justify-between gap-2 text-left cursor-pointer"
                    contentClassName="flex flex-col gap-4 pt-4"
                    trigger={
                      <div className="flex flex-col">
                        <span className="text-base leading-[148%] font-medium">
                          {activeLocation?.city}
                        </span>
                        <span className="text-gray text-sm leading-[148%]">
                          {activeLocation?.address} • {activeLocation?.name}
                        </span>
                      </div>
                    }
                  >
                    {LOCATIONS.filter((loc) => loc.name !== selectedLocation).map((loc) => (
                      <button
                        key={loc.name}
                        type="button"
                        onClick={() => {
                          setSelectedLocation(loc.name)
                          setIsDropdownOpen(false)
                        }}
                        className="group flex flex-col text-left"
                      >
                        <span
                          className={`text-base leading-[148%] font-medium transition-colors ${loc.name === selectedLocation ? 'text-accent' : 'group-hover:text-accent'}`}
                        >
                          {loc.city}
                        </span>
                        <span className="text-gray text-sm leading-[148%]">
                          {loc.address} • {loc.name}
                        </span>
                      </button>
                    ))}
                  </Dropdown>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <FormInput
                  placeholder="Имя*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                  type="tel"
                  placeholder="+7 (___) ___-__-__*"
                  maxLength={18}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d+\s\-()]/g, ''))}
                />
                <FormInput
                  placeholder="Дата и время"
                  readOnly
                  value={
                    selectedDate
                      ? selectedDate.toLocaleString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : ''
                  }
                  onFocus={() => setIsDatePickerOpen(true)}
                  className="cursor-pointer"
                  leftSlot={<CalendarIcon className="text-gray h-5 w-5 pt-1.5" />}
                />

                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <div>
                    <Paragraph delay={1}>Сколько гостей</Paragraph>
                    <Paragraph delay={1.2} className="text-gray">
                      От {MIN_GUESTS} до {MAX_GUESTS}
                    </Paragraph>
                  </div>
                  <div className="flex gap-4">
                    <StepperBtn
                      onClick={() => setGuests((g) => Math.max(MIN_GUESTS, g - 1))}
                      label="Уменьшить"
                    >
                      <MinusIcon width={24} height={24} />
                    </StepperBtn>
                    <Paragraph delay={1.4} className="w-6 text-center">
                      {guests}
                    </Paragraph>
                    <StepperBtn
                      onClick={() => setGuests((g) => Math.min(MAX_GUESTS, g + 1))}
                      label="Увеличить"
                    >
                      <PlusIcon width={24} height={24} />
                    </StepperBtn>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button text="Забронировать" className="w-full" disabled={!isValid} />

                <Checkbox
                  checked={consent}
                  onChange={setConsent}
                  label={
                    <Paragraph delay={1.6}>
                      Я подтверждаю свою{' '}
                      <a href="/policy" className="underline">
                        согласие на обработку персональных данных
                      </a>
                    </Paragraph>
                  }
                />
              </div>
            </div>
          )}
        </div>
      )}
    </SlideModal>
  )
}
