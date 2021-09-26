import { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  children: ReactNode
  onRequestClick: () => void
}

export function AppButton({ children, onRequestClick }: Props) {
  return (
    <Container type="button" onClick={onRequestClick}>
      {children}
    </Container>
  )
}
