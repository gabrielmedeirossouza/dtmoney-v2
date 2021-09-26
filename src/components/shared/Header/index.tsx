import { ReactNode } from 'react'

import { Container, MainContainer } from './styles'
import mainLogo from '../../../assets/logos/main.svg'

interface Props {
  children: ReactNode
}

export function Header({ children }: Props) {
  return (
    <Container>
      <MainContainer>
        <img src={mainLogo} alt="logo" />

        {children}
      </MainContainer>
    </Container>
  )
}
