import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Rondonópolis',
      slug: 'rondonopolis',
      location: {
        latitude: -16.46476200741435,
        longitude: -54.640309348349625
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Cuiabá',
      slug: 'cuiaba',
      location: {
        latitude: -60,
        longitude: 123
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/rondonópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/cuiabá/i)).toBeInTheDocument()
  })
})
