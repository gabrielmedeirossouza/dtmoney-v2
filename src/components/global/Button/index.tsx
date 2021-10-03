import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode
  onRequestClick: () => void
}

export const Button = ({ children, onRequestClick }: Props) => (
  <Container type="button" onClick={onRequestClick}>
    {children}
  </Container>
);
