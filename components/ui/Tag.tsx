interface TagProps {
  text: string
  variant?: 'black' | 'gray' | 'white' | 'beige'
  className?: string
}

const baseStyles =
  'w-fit rounded-sm px-2 py-1 md:px-2 md:py-1 text-base leading-[148%] font-medium tracking-[1%] whitespace-nowrap'

const variantStyles: Record<NonNullable<TagProps['variant']>, string> = {
  black: 'bg-(--color-dark-black)',
  gray: 'bg-(--color-devider) text-white',
  white: 'bg-white text-accent',
  beige: 'bg-beige text-accent',
}

const Tag = ({ text, variant = 'black', className = '' }: TagProps) => {
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  return <p className={combinedClassName}>{text}</p>
}

export default Tag
