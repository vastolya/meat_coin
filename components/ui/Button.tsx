interface ButtonProps {
  text: string
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
}

const baseStyles =
  'w-fit h-fit font-extrabold text-base leading-relaxed uppercase px-6 py-4 rounded-sm cursor-pointer transition-all duration-300'

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'text-white bg-(--color-accent)  hover:bg-(--color-dark)',
  secondary:
    'border-2 text-(--color-accent) hover:text-white border-(--color-accent) hover:bg-(--color-accent)',
}

const Button = ({ text, variant = 'primary', className = '', href }: ButtonProps) => {
  const combinedClassName = `${className} ${baseStyles} ${variantStyles[variant]} `

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
        {text}
      </a>
    )
  }

  return <button className={combinedClassName}>{text}</button>
}

export default Button
