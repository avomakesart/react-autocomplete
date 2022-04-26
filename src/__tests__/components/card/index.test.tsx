import { Card } from '../../../components'
import { render } from '@testing-library/react'

describe('components/card', () => {
  test('render the card component correctly', () => {
    const props = {
      className: 'cool-classname',
      children: <p>Hey I am a paragraph inside a card</p>,
    }
    const rendered = render(<Card {...props} />)
    expect(rendered.baseElement).toBeInTheDocument()
  })

  test('render the card component correctly with an array of data inside', () => {
    const mockData = [
      {
        id: 1,
        username: 'alvaro',
        fullName: 'Alvaro Castillo',
        hobby: 'Play Guitar',
      },
      {
        id: 2,
        username: 'jessie',
        fullName: 'Jessica Diaz',
        hobby: 'Create art',
      },
      {
        id: 3,
        username: 'george',
        fullName: 'George Gardea',
        hobby: 'Teach martial arts',
      },
    ]
    const props = {
      className: 'cool-classname',
      children: (
        <div>
          {mockData.map(({ id, username, fullName, hobby }) => (
            <div key={id}>
              <span>Username: {username}</span>
              <span>Full Name: {fullName}</span>
              <span>Hobby: {hobby}</span>
            </div>
          ))}
        </div>
      ),
    }
    const rendered = render(<Card {...props} />)
    expect(rendered.baseElement).toBeInTheDocument()
  })
})
