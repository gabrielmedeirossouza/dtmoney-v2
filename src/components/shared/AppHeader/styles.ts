import styled from 'styled-components';

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
  top: 1rem;
  right: 1rem;

  cursor: pointer;

  color: white;
  font-size: 3rem;
  line-height: 4px;
`;
