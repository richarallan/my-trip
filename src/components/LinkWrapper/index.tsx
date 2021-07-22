import Link from 'next/link'
import * as S from './styles'

// isso é uma interface, mas no typescript é simples e é melhor usar o type
type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
