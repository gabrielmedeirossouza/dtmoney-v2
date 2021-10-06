import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/global';

export const Container = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8.5rem;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

export const Icon = styled(FaBars).attrs(() => ({
  title: 'menu',
  size: '2rem',
}))`
  fill: ${(props) => props.theme.colors.textLight};
  transition: fill 0.2s;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;

  background-color: transparent;
  padding: 0;
  margin: 0;

  &:hover {
    filter: none;

    ${Icon} {
      fill: ${(props) => String(darken(0.2, props.theme.colors.textLight))};
    }
  }

  &:active {
    filter: none;

    ${Icon} {
      fill: ${(props) => String(darken(0.7, props.theme.colors.textLight))};
    }
  }
`;

interface SideMenuProps {
  isOpen: boolean
}

export const SideMenu = styled.nav<SideMenuProps>`
  ${(props) => !props.isOpen && css`
    transform: translateX(250px);
  `}

  width: 250px;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.secondary};
  transition: transform 0.2s;
`;

export const Header = styled.div`
  padding: 1rem 4rem 1rem 1rem;
  background-color: transparent;

  &>div {
    height: 50px;
    background-color: tomato;
  }
`;
