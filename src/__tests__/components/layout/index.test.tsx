import { render } from '@testing-library/react'
import { Layout } from '../../../components'

describe('components/layout', () => {
  test('should render the Layout component correctly', () => {
    const rendered = render(
      <Layout>
        <p>Cool value</p>
      </Layout>,
    )
    expect(rendered.baseElement).toBeInTheDocument()
  })

  test('should render the Layout component correctly doing a map on a list', () => {
    const rendered = render(
      <Layout>
        <ul>
          {Array.from(['hello', 'world', 'hey', 'it is cool']).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </Layout>,
    )
    expect(rendered.baseElement).toBeInTheDocument()
  })
})
