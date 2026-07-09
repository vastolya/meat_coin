'use client'

import { useBooking } from '@/contexts/BookingContext'
import Button from '@/components/ui/Button'

export default function MobileBookingButton() {
  const { openBooking } = useBooking()

  return (
    <div className="fixed bottom-8 left-4 right-4 z-50 md:hidden">
      <Button text="Забронировать" className="w-full" onClick={() => openBooking()} />
    </div>
  )
}
