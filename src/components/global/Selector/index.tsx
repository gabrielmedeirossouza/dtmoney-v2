import { StyledButton, Toggler } from './styles';

interface ISelectorProps {
  isActive: boolean
  onToggle: () => void
}

export const Selector = ({ isActive, onToggle }: ISelectorProps) => (
  <StyledButton onClick={onToggle}>
    <Toggler isActive={isActive} />
  </StyledButton>
);
