'use client'

import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedImage from '@/components/ui/AnimatedImage'
import H3Title from '@/components/ui/H3Title'
import Paragraph from '@/components/ui/Paragraph'
import type { Dish } from '@/consts/menu'

interface DishCardProps {
  dish: Dish
  index: number
  aspect: string
}

export default function DishCard({ dish, index, aspect }: DishCardProps) {
  return (
    <AnimatedDiv delay={index * 0.05} className="group flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-sm bg-(--color-devider) ${aspect}`}>
        <AnimatedImage
          src={dish.image}
          alt={dish.name}
          className="h-full w-full"
          imgClsx="object-cover transition-transform duration-500 group-hover:scale-105"
          disableAnimation
        />
        <div className="absolute bottom-4 left-4 flex flex-col gap-1">
          <H3Title className="text-white">{dish.name}</H3Title>
          <Paragraph className="text-border text-sm">{dish.weight}</Paragraph>
        </div>
      </div>
    </AnimatedDiv>
  )
}
