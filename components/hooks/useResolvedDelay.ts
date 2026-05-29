'use client'

import { useEffect, useState } from 'react'

export type ViewportDelay = {
  mobile: number
  desktop: number
}

export type AnimationDelay = number | ViewportDelay

function getMatchesDesktop() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
}

export function useResolvedDelay(delay: AnimationDelay = 0) {
  const isViewportDelay = typeof delay === 'object'
  const [matchesDesktop, setMatchesDesktop] = useState(() =>
    isViewportDelay ? getMatchesDesktop() : false,
  )

  useEffect(() => {
    if (!isViewportDelay) {
      return
    }

    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const updateMatchesDesktop = () => setMatchesDesktop(mediaQuery.matches)

    updateMatchesDesktop()
    mediaQuery.addEventListener('change', updateMatchesDesktop)

    return () => {
      mediaQuery.removeEventListener('change', updateMatchesDesktop)
    }
  }, [isViewportDelay])

  if (isViewportDelay) {
    return matchesDesktop ? delay.desktop : delay.mobile
  }

  return delay
}
