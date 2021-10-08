import { ReactNode, useState } from 'react';

import { LanguageSelector } from '@/components/global/LanguageSelector';
import {
  Container,
  MainContainer,
  Menu,
  StyledButton,
  Icon,
  SideMenu,
  Header,
} from './styles';

import mainLogo from '@/assets/logos/main.svg';

interface Props {
  children: ReactNode
}

export const AppHeader = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <Container>
      <MainContainer>
        <img src={mainLogo} alt="logo" />

        {children}
      </MainContainer>

      <Menu>
        <StyledButton onClick={handleMenu}>
          <Icon />
        </StyledButton>

        <SideMenu isOpen={isOpen}>
          <Header>
            <LanguageSelector />
          </Header>
        </SideMenu>
      </Menu>
    </Container>
  );
};
