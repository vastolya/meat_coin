'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import AnimatedDiv from './AnimatedDiv'

type Props = {
  src: string
  alt: string
  className?: string
  sizes?: string
  delay?: number
  children?: ReactNode
}

const AnimatedImage = ({
  src,
  alt,
  className,
  sizes = '(min-width: 768px) 25vw, 100vw',
  delay = 0,
  children,
}: Props) => (
  <AnimatedDiv delay={delay} className={`relative overflow-hidden ${className}`}>
    <Image fill src={src} alt={alt} sizes={sizes} className="object-cover" />
    {children}
  </AnimatedDiv>
)

export default AnimatedImage
