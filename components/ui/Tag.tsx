interface TagProps {
  text: string
  variant?: 'black' | 'gray'
}

const baseStyles = 'w-fit rounded-sm px-2 py-1 text-base leading-[148%] font-medium tracking-[1%]'

const variantStyles: Record<NonNullable<TagProps['variant']>, string> = {
  black: 'bg-(--color-dark-black)',
  gray: 'bg-(--color-devider)',
}

const Tag = ({ text, variant = 'black' }: TagProps) => {
  const combinedClassName = `${baseStyles} ${variantStyles[variant]}`

  return <p className={combinedClassName}>{text}</p>
}

export default Tag
