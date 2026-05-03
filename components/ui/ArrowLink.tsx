'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import ArrowIcon from '@/components/icons/ArrowIcon'

interface ArrowLinkProps {
  href: string
  size?: number
}

export default function ArrowLink({ href, size = 24 }: ArrowLinkProps) {
  return (
    <Link href={href} className="inline-flex">
      <motion.span
        className="inline-flex text-white transition-colors duration-300 hover:text-(--color-accent)"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <ArrowIcon width={size} height={size} />
      </motion.span>
    </Link>
  )
}
