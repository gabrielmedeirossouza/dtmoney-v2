import { ReactNode, useState } from 'react';

import {
  Container,
  MainContainer,
  Menu,
  StyledButton,
  Icon,
  SideMenu,
} from './styles';

import mainLogo from '@/assets/logos/main.svg';

interface Props {
  children: ReactNode
}

export const AppHeader = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <MainContainer>
        <img src={mainLogo} alt="logo" />

        {children}
      </MainContainer>

      <Menu>
        <StyledButton onRequestClick={handleMenu}>
          <Icon />
        </StyledButton>

        <SideMenu isOpen={isOpen}>
          <button type="button">teste</button>
        </SideMenu>
      </Menu>
    </Container>
  );
};
