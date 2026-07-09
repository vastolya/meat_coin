export interface CardLayout {
  col: string
  aspect: string
}

export function getCardLayout(index: number): CardLayout {
  const pos = index % 8
  if (pos === 0)
    return { col: 'col-span-5 md:col-span-8', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  if (pos === 1)
    return { col: 'col-span-5 md:col-span-4', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  if (pos === 6)
    return { col: 'col-span-5 md:col-span-4', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  if (pos === 7)
    return { col: 'col-span-5 md:col-span-8', aspect: 'aspect-square md:aspect-none md:h-[476px]' }
  return { col: 'col-span-5 md:col-span-3', aspect: 'aspect-square md:aspect-none md:h-[300px]' }
}
