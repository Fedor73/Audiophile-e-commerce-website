import {FC} from 'react'

type TypeCheck = {
  className?: string
}

export const CheckMark: FC<TypeCheck> = ({className}) => {
  return (
    <svg
      className={className}
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='32' cy='32' r='32' fill='#D87D4A' />
      <path
        d='M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812'
        stroke='white'
        strokeWidth='4'
      />
    </svg>
  )
}
