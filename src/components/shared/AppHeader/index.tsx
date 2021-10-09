import {
  ReactNode, useState, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Selector } from '@/components/global';
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

const br = 'pt-BR';
const us = 'en-US';

// useReducer

export const AppHeader = ({ children }: Props) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveLanguageSelector, setIsActiveLanguageSelector] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  const handleToggleLanguageSelector = () => {
    setIsActiveLanguageSelector(!isActiveLanguageSelector);
  };

  useEffect(() => {
    const { language } = i18n;

    const isActive = language === br;

    setIsActiveLanguageSelector(isActive);
  }, []);

  useEffect(() => {
    const language = isActiveLanguageSelector ? br : us;

    i18n.changeLanguage(language);
  }, [isActiveLanguageSelector]);

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
            en
            <Selector
              isActive={isActiveLanguageSelector}
              onToggle={handleToggleLanguageSelector}
            />
            pt
          </Header>
        </SideMenu>
      </Menu>
    </Container>
  );
};
