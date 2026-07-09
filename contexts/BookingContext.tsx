'use client'

import { createContext, useContext, useState } from 'react'
import BookingModal from '@/components/BookingModal'
import { type Location, LOCATIONS } from '@/consts/locations'

interface BookingContextValue {
  openBooking: (location?: Location) => void
}

const BookingContext = createContext<BookingContextValue>({ openBooking: () => {} })

export function useBooking() {
  return useContext(BookingContext)
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookingLocation, setBookingLocation] = useState<Location | null>(null)

  return (
    <BookingContext.Provider value={{ openBooking: (loc) => setBookingLocation(loc ?? LOCATIONS[0]) }}>
      {children}
      <BookingModal location={bookingLocation} onClose={() => setBookingLocation(null)} />
    </BookingContext.Provider>
  )
}
