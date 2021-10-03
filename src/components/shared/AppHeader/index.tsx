import { ReactNode } from 'react';

import { Container, MainContainer } from './styles';
import mainLogo from '@/assets/logos/main.svg';

interface Props {
  children: ReactNode
}

export const AppHeader = ({ children }: Props) => (
  <Container>
    <MainContainer>
      <img src={mainLogo} alt="logo" />

      {children}
    </MainContainer>
  </Container>
);
