import styled, { keyframes } from 'styled-components';
import { Button } from '@/components/global';

const AToggleDeactivated = keyframes`
  from { right: 0; }
  to {right: calc(100% - 1.25rem);}
`;

const AToggleActivated = keyframes`
  from {right: calc(100% - 1.25rem); }
  to { right: 0;}
`;

export const StyledButton = styled(Button)`
  margin: 0;
  padding: 0;
`;

interface ISelectorProps {
  isActive: boolean
}

export const Toggler = styled.div<ISelectorProps>`
  position: relative;
  width: 3rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;

  &::after {
    content: '';
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    animation: ${({ isActive }) => (isActive ? AToggleActivated : AToggleDeactivated)} 0.1s linear forwards;

    height: 1.25rem;
    width: 1.25rem;

    background-color: white;
    border-radius: 100%;
  }
`;
