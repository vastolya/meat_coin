'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import ArrowIcon from '@/components/icons/ArrowIcon'

const MotionLink = motion.create(Link)

interface ArrowLinkProps {
  href?: string
  size?: number
}

export default function ArrowLink({ href, size = 24 }: ArrowLinkProps) {
  const icon = (
    <motion.span
      className="inline-flex text-white transition-colors duration-300 group-hover:text-(--color-accent)"
      variants={{ rest: { x: 0 }, hovered: { x: 6 } }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <ArrowIcon width={size} height={size} />
    </motion.span>
  )

  if (href) {
    return (
      <MotionLink href={href} className="group inline-flex" initial="rest" whileHover="hovered">
        {icon}
      </MotionLink>
    )
  }
  return <span className="inline-flex">{icon}</span>
}
