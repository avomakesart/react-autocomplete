import React from 'react'
import { forwardRef } from '../../utils'

interface ContainerProps {
  /**
   * Custom maxWidth for the container
   */
  maxW?: string
  /**
   * Custom width for the container
   */
  size?: string
  /**
   *  Custom padding for the container
   */
  p?: string
  /**
   *  Custom padding left for the container
   */
  pl?: string
  /**
   *  Custom padding right for the container
   */
  pr?: string
  /**
   * Custom margin for the container
   */
  m?: string
  /**
   * Custom margin left for the container
   */
  ml?: string
  /**
   * Custom margin right for the container
   */
  mr?: string
}

export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const { maxW = '30rem', size = '100%', p = '3rem 0', pl, pr, m, ml = 'auto', mr = 'auto', ...rest } = props

  const containerStyles: React.CSSProperties = {
    maxWidth: maxW,
    width: size,
    padding: p,
    paddingLeft: pl,
    paddingRight: pr,
    margin: m,
    marginLeft: ml,
    marginRight: mr,
  }

  return <div ref={ref} style={containerStyles} {...rest} />
})
