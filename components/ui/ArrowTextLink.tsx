'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import Paragraph from './Paragraph'
import ArrowIcon from '@/components/icons/ArrowIcon'

const MotionLink = motion.create(Link)

type ArrowTextLinkProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  size?: number
  className?: string
}

const arrowVariants = { rest: { x: 0 }, hovered: { x: 6 } }

export default function ArrowTextLink({
  children,
  href,
  onClick,
  size = 24,
  className = '',
}: ArrowTextLinkProps) {
  const content = (
    <>
      <Paragraph disableAnimation>{children}</Paragraph>
      <motion.span
        className="inline-flex"
        variants={arrowVariants}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <ArrowIcon width={size} height={size} />
      </motion.span>
    </>
  )

  const classes = `group hover:text-accent flex w-fit cursor-pointer items-center gap-2 transition-colors duration-300 ${className}`

  if (href) {
    return (
      <MotionLink href={href} initial="rest" whileHover="hovered" className={classes}>
        {content}
      </MotionLink>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="rest"
      whileHover="hovered"
      className={classes}
    >
      {content}
    </motion.button>
  )
}
