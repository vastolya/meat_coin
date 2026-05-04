import { forwardRef, type ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const GridSection = forwardRef<HTMLElement, Props>(function GridSection(
  { className, children },
  ref
) {
  return (
    <section
      ref={ref as any}
      className={`mx-auto grid grid-cols-5 gap-2 px-4 md:max-w-360 md:grid-cols-12 md:gap-7 md:px-20 ${className ? ` ${className}` : ''}`}
    >
      {children}
    </section>
  )
})

export default GridSection
