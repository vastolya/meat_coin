import { InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightSlot?: React.ReactNode
  leftSlot?: React.ReactNode
  className?: string
  inputClassName?: string
}

export default function FormInput({
  rightSlot,
  leftSlot,
  className = '',
  inputClassName = '',
  ...props
}: FormInputProps) {
  const base =
    'placeholder:text-gray border-devider w-full border-b pt-1 pb-4 outline-none placeholder:text-base placeholder:leading-[148%] placeholder:font-medium placeholder:tracking-[0.01em]'
  const noSpin =
    props.type === 'number'
      ? ' [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
      : ''

  if (leftSlot || rightSlot) {
    return (
      <div className={`relative ${className}`}>
        {leftSlot && <span className="pointer-events-none absolute top-1 left-0">{leftSlot}</span>}
        <input
          className={`${base}${noSpin} ${leftSlot ? 'pl-7' : ''} ${rightSlot ? 'pr-8' : ''} ${inputClassName}`}
          {...props}
        />
        {rightSlot && (
          <span className="pointer-events-none absolute top-1 right-3">{rightSlot}</span>
        )}
      </div>
    )
  }

  return <input className={`${base}${noSpin} ${className}`} {...props} />
}
