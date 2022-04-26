import { Spinner } from '../../../components'
import { render } from '@testing-library/react'

describe('components/spinner', () => {
  test('should render the spinner correctly', () => {
    const props = {
      label: 'Loading',
      thickness: '2px',
      speed: '0.45s',
      emptyColor: 'transparent',
      width: '1.5rem',
      height: '1.5rem',
    }

    const rendered = render(<Spinner {...props} />)

    expect(rendered)
  })
})
