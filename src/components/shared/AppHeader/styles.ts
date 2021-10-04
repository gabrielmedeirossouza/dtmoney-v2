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
  padding: 36px 15px 136px;
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

  background-color: transparent;
  padding: 0;
  margin: 0;

  &:hover {
    filter: none;

    ${Icon} {
      fill: ${(props) => String(darken(0.2, props.theme.colors.textLight))};
    }
  }
`;

interface SideMenuProps {
  isOpen: boolean
}

export const SideMenu = styled.nav<SideMenuProps>`
  ${(props) => !props.isOpen && css`
    display: none;
    transform: translateX(-500px);
    /* adicionar animação */
  `}

  z-index: -1;

  width: 250px;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.secondary};
  transition: transform 1s;
`;
