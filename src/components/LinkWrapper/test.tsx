import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    // Esse playground é interessante, ele entrega um playground com
    // possiveis testes!! Dar uma brincada depois
    // screen.logTestingPlaygroundURL()
  })
})
