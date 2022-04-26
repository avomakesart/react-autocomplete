import React from 'react'
import { forwardRef } from '../../utils'
import styles from './spinner.module.css'
import cn from 'clsx'

export interface IconSpinProps {
  iconSpinclassName?: string
  style?: React.CSSProperties
  fill?: string
  stroke?: string
  width?: string
  height?: string
}

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, IconSpinProps {
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: string
  /**
   * The color of the spinner
   */
  color?: string
  /**
   * The thickness of the spinner
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string
  width?: string
  height?: string
  className?: string
}

export const Spinner = forwardRef<SpinnerProps, 'div'>((props, ref) => {
  const {
    label = 'Loading',
    thickness = '2px',
    speed = '0.45s',
    color,
    emptyColor = 'transparent',
    width = '1.5rem',
    height = '1.5rem',
    className,
    ...rest
  } = props

  const srOnlyStyles: React.CSSProperties = {
    border: '0px',
    clip: 'rect(0px, 0px, 0px, 0px)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  }

  const spin = 'spin'

  const spinnerStyles: React.CSSProperties = {
    display: 'inline-block',
    borderColor: 'currentColor',
    borderStyle: 'solid',
    borderRadius: '99999px',
    borderWidth: thickness,
    width: width,
    height: height,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    color,
  }

  return (
    <div ref={ref} style={spinnerStyles} className={cn(styles.spinner, className)} {...rest}>
      {label && <span style={srOnlyStyles}>{label}</span>}
    </div>
  )
})
