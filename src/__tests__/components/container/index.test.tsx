import { Container } from '../../../components'
import { render } from '@testing-library/react'

describe('components/container', () => {
  test('should render the container correctly by default', () => {
    const rendered = render(<Container>Some children value</Container>)
    expect(rendered.baseElement).toBeInTheDocument()
  })

  test('should render the container correctly with all of its props', () => {
    const props = {
      maxW: '30rem',
      size: '100%',
      p: '3rem 0',
      pl: '1rem',
      pr: '1rem',
      m: '3rem',
      ml: 'auto',
      mr: 'auto',
      children: 'Some children value',
    }
    const rendered = render(<Container {...props} />)
    expect(rendered.baseElement).toBeInTheDocument()
  })
})
