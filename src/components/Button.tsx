/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { ButtonHTMLAttributes } from 'react'
import { ButtonCss } from '../styles/button'

// import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonCss>
      <button
        type="button"
        className={`button ${isOutlined ? 'outlined' : ''}`}
        {...props}
      />
    </ButtonCss>
  )
}
