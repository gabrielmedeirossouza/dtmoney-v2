import { ReactNode, MouseEvent } from 'react';
import { Container } from './styles';

interface Props {
  className?: string
  children: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ className, children, onClick }: Props) => (
  <Container
    className={className}
    type="button"
    onClick={onClick}
  >
    {children}
  </Container>
);
