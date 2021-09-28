import { ReactNode } from 'react'

import { Container } from './styles'

interface Props {
  children: ReactNode
}

export function DataTable({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
