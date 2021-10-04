import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  className?: string
  children: ReactNode
  onRequestClick: () => void
}

export const Button = ({ className, children, onRequestClick }: Props) => (
  <Container
    className={className}
    type="button"
    onClick={onRequestClick}
  >
    {children}
  </Container>
);
