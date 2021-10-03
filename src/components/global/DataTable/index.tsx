import { ReactNode } from 'react'

import { Container } from './styles'

interface Props {
  children: ReactNode
  className?: string
}

export const DataTable = ({ children, className }: Props) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}
