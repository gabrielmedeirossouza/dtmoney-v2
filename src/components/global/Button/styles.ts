import styled from 'styled-components'

export const Container = styled.button`
  font-size: 16px;

  color: #fafafa;
  background-color: ${props => props.theme.colors.secondary};

  border: none;
  border-radius: 5px;
  padding: 10px 30px;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
